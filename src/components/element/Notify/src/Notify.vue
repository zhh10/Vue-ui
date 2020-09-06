<template>
    <transition :name="slideName">
        <div class="el-notify" 
        :class="{'el-notify--topLeft':position==='top-left',
                 'el-notify--topRight':position==='top-right',
                 'el-notify--bottomLeft':position==='bottom-left',
                 'el-notify--bottomRight':position==='bottom-right'}"
        v-show="visible">
            <div v-if="type" class="el-notify--icon" :class="{'is-success':type==='success',
            'is-info':type==='info','is-error':type==='error',
            'is-warning':type==='warning'
            }">
                <el-icon :name="type"></el-icon>
            </div>
            <div class="el-notify--wrapper">
                <div class="el-notify--title" v-html="title"></div>
                <div class="el-notify--message" v-html="message"></div>
                <div class="el-notify--close" v-if="showClose">
                    <el-icon name="close" @click.native="closeNotify"></el-icon>
                </div>
            </div>
        </div>
    </transition>
    
</template>
<script>
export default {
    name:'ElNotify',
    props:{
        type:String,
        message:{type:String,required:true},
        position:{type:String,default:'top-right'},
        title:{type:String,required:true},
        duration:Number,
        showClose:Boolean,
    },
    data(){
        return {
            visible:false,
            timer:null,
        }
    },
    computed:{
        slideName(){
            if(this.position === 'bottom-right' || this.position === 'top-right'){
                return "slide-RightNotify";
            }else{
                return "slide-LeftNotify";
      }}
    },
    mounted(){
        this.visible = true
        !this.showClose && this.autoClose()
    },
    methods:{
        closeNotify(){
            this.close()
        },
        autoClose(){
            this.timer = setTimeout(()=>{
                this.close()
            },this.duration)
        },
        close(){
            this.visible = false;
            this.$el.addEventListener('transitionend',this.destroyEle)
        },
        destroyEle(){
            this.$el.removeEventListener('transitionend',this.destroyEle)
            this.$destroy()
        },
    }
}
</script>
<style scoped>
.slide-RightNotify-enter-active,
.slide-RightNotify-leave-active {
    transition: transform .3s ease-in-out, opacity .3s ease-in-out;
}
.slide-RightNotify-enter-to,
.slide-RightNotify-leave {
    transform: translateX(0);
    opacity: 1;
}
.slide-RightNotify-enter,
.slide-RightNotify-leave-to {
    transform: translateX(100%);
    opacity: 0;
}

.slide-LeftNotify-enter-active,
.slide-LeftNotify-leave-active {
    transition: transform .3s ease-in-out, opacity .3s ease-in-out;
}
.slide-LeftNotify-enter-to,
.slide-LeftNotify-leave {
    transform: translateX(0);
    opacity: 1;
}
.slide-LeftNotify-enter,
.slide-LeftNotify-leave-to {
    transform: translateX(-100%);
    opacity: 0;
}
</style>