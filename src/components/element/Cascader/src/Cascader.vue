<template name="Cascader">
    <div class="el-cascader" v-clickoutside="close">
        <el-input icon="arrow-down" @click.native="toggle" v-model="InputValue"></el-input>
        <transition  @enter="enter" @after-enter="afterEnter"
         @leave="leave" @after-leave="afterLeave">
            <div v-if="popoverVisible" class="el-cascader--Item">
                <el-cascader-item :selected="value" @update:selected="onUpdateSelected" 
                :items="dataSource" :height="height"></el-cascader-item>
            </div>
        </transition>
    </div>
</template>
<script>
import Vue from 'vue';
import clickoutside from "@/assets/directive/clickOutside"
export default {
    name:'ElCascader',
    directives:{clickoutside},
    props:{
        dataSource:{type:Array,default:() => []},
        height:String,
        value:{type:Array,default:() => []},
    },
    data(){
        return {
            popoverVisible:false,
            EventBus:new Vue(),
        }
    },
    provide(){
        return {
            EventBus:this.EventBus
        }
    },
    mounted(){
        this.EventBus.$on('Close',status => {
            if(status === 'close'){this.close()}
        })
    },
    computed:{
        InputValue(){
            if(this.value){
                return this.value.join('/')
            }else{
                return null
            }
        }
    },
    methods:{
        toggle(){
            if(this.popoverVisible){
                this.close()
            }else{
                this.open()
            }
        },
        open(){
            this.popoverVisible = true;
        },
        close(){
            this.popoverVisible = false;
        },
        onUpdateSelected(newArr){
            this.$emit('update:value',newArr)
        },

        enter(el,done){
            let {height} = el.getBoundingClientRect()
            el.style.height = 0
            el.getBoundingClientRect() 
            el.style.height = `${height}px`
            el.addEventListener('transitioned',()=>{done()})
        },
        afterEnter(el){
            el.style.height = 'auto'
        },
        leave(el,done){
            let {height} = el.getBoundingClientRect()
            el.style.height = `${height}px`
            el.getBoundingClientRect()
            el.style.height = 0
            el.addEventListener('transitionend',()=>{done()})
        },
        afterLeave(el){
            el.style.height = 'auto'
        }
    },
    
}
</script>
<style scoped>
/* .v-enter-active,
.v-leave-active {
    transition: transform .3s ease-in-out, opacity .3s ease-in-out;
}
.v-enter-to,
.v-leave {
    transform: translateX(0) ;
    opacity: 1;
}
.v-enter,
.v-leave-to {
    transform: translateX(-100%);
    opacity: 0;
} */
</style>