<template>
    <transition name="slide-message">
        <div class="el-message" 
        v-show="visible"
        :style="{top:`${top}px`}"
        :class="{'is-success':type==='success',
        'is-info':type==='info',
        'is-warning':type==='warning',
        'is-error':type==='error'}">
            <div class="el-message--text">
                <span class="el-message--icon">
                    <el-icon :name="type"></el-icon>
                </span>
                <span v-html="message"></span>
            </div>
            <span class="el-message--close" v-if="showClose">
                <el-icon name="close" @click.native="closeMessage"></el-icon>
            </span>
        </div>
    </transition>
</template>
<script>
export default {
    name:'ElMessage',
    props:{
        message:{type:String,required:true},
        type:{type:String,required:true},
        duration:{type:Number,default:2000},
        showClose:{type:Boolean,default:false}
    },
    data(){
        return {
            visible:false,
            timer:null,
            top:null,
        }
    },
    methods:{
        closeMessage(){
            this.close()
        },
        autoClose(){
            this.timer = setTimeout(()=>{
                this.close()
            },this.duration)
        },
        close(){
            this.visible = false;
            this.$el.addEventListener('transitionend',this.destroyEle);
        },
        destroyEle(){
            this.$el.removeEventListener('transitionend',this.destroyEle)
            this.$destroy()
        }
    },
    mounted(){
        // 如果没有关闭按钮就自动关闭
        this.visible = true;
        !this.showClose && this.autoClose()
    },
    beforeDestroy(){
        this.timer ? clearTimeout(this.timer):'';
        this.$el.remove()
    }
}
</script>
<style scoped>
    .slide-message-enter-active,
    .slide-message-leave-active {
        transition: transform .3s ease-in-out, opacity .3s ease-in-out;
    }
    .slide-message-enter-to,
    .slide-message-leave {
        transform: translateY(0) translateX(-50%);
        opacity: 1;
    }
    .slide-message-enter,
    .slide-message-leave-to {
        transform: translateY(-100%) translateX(-50%);
        opacity: 0;
    }
</style>