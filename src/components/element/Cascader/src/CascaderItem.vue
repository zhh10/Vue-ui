<template>
    <div :style="{height:height}" class="el-cascaderItem">
        <ul class="el-cascaderItem--left">
            <template v-for="(item,index) in items">
                <li :key="index" @click="onClickLabel(index)" class="el-cascaderItem--li">
                    <span class="el-cascaderItem--text">{{item.name}}</span>
                    <el-icon class="el-cascaderItem--icon" name="arrow-right" v-if="item.children"></el-icon>
                </li>
            </template>
        </ul>
        <transition  @enter="enter" @after-enter="afterEnter"
         @leave="leave" @after-leave="afterLeave">
            <div class="el-cascaderItem--right" v-if="rightItems">
                <el-cascader-item  
                :items="rightItems"
                :height="height" :level="level+1"
                :selected="selected"
                @update:selected="onUpdateSelected"></el-cascader-item>
            </div>
        </transition>
    </div>
</template>
<script>
export default {
    name:"ElCascaderItem",
    inject:['EventBus'],
    props:{
        selected:{type:Array,default:() => []},
        items:{type:Array,default:() => []},
        height:String,
        level:{type:Number,default:0}
    },
    computed:{
        rightItems(){
            if(this.selected[this.level]){
                let selected = this.items.filter(item => item.name === this.selected[this.level])
                if(selected && selected[0].children && selected[0].children.length > 0){
                    return selected[0].children
                }else{
                    return null
                }
            }else{
                return null
            }
        },
        updateLevel(){
            console.log(this.level+1)
            return this.level + 1
        }
    },
    methods:{
        onClickLabel(index){
            const itemsCopy = JSON.parse(JSON.stringify(this.selected))
            itemsCopy[this.level] = this.items[index].name
            itemsCopy.splice(this.level + 1)
            this.$emit('update:selected',itemsCopy)
            if(!this.items[index].children){
                this.EventBus.$emit('Close','close')
            }
        },
        onUpdateSelected(newArr){
            this.$emit('update:selected',newArr)
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
    }
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