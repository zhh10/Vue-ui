<template>
    
        <div class="el-messagebox" >
            <transition name="fade-messageBox">
            <div class="el-messagebox--info" v-show="visible">
                <div class="el-messagebox--title">{{title}}</div>
                <el-icon name="close" class="el-messagebox--close" @click.native="onClick('cancel')"></el-icon>
                <div class="el-messagebox--message">
                    <div class="el-messagebox--icon"
                        :class="{'is-warning':ButtonOptions.type === 'warning',
                             'is-success':ButtonOptions.type === 'success',
                             'is-info':ButtonOptions.type === 'info',
                             'is-error':ButtonOptions.type === 'error'}"
                        v-if="ButtonOptions.type">
                        <el-icon :name="ButtonOptions.type"></el-icon>
                    </div>
                    <p v-html="message"></p>
                </div>
                <div class="el-messagebox--buttonWrapper">
                    <el-button size="small" 
                    v-if="ButtonOptions.cancelButtonText"
                    @click="onClick('cancel')">
                        {{ButtonOptions.cancelButtonText}}
                    </el-button>
                    <el-button type="primary" size="small" 
                    v-if="ButtonOptions.confirmButtonText"
                    @click="onClick('confirm')">
                        {{ButtonOptions.confirmButtonText}}
                    </el-button>
                </div>
            </div>
            </transition>
        </div>
    
</template>
<script>
export default {
    name:'ElMessageBox',
    props:{
        message:{type:String,required:true},
        title:String,
        ButtonOptions:Object
    },
    data(){
        return {
            visible:false,
            promiseStatus:null
        }
    },
    methods:{
        onClick(type){
            if(type === 'cancel'){
                this.promiseStatus.reject();
            }else if(type === 'confirm'){
                this.promiseStatus.resolve();
            }
            this.visible = false
            this.$el.addEventListener('transitionend',this.destroyEle)
        },
        confirm(){
            return new Promise((resolve,reject)=>{
                this.promiseStatus = {resolve,reject};
            })
        },
        destroyEle(){
            this.$el.removeEventListener('transitionend',this.destroyEle)
            this.$destroy()
        }
    },
    mounted(){
        this.visible = true;
    },
    beforeDestroy(){
        this.$el.remove()
    }
}
</script>
<style scoped>
.fade-messageBox-enter-active, .fade-messageBox-leave-active {
        transition: all .3s ease-in-out;
    }
    .fade-messageBox-enter-to, .fade-messageBox-leave {
        opacity: 1;
        transform: translateY(-50%) translateX(-50%);
    }
    .fade-messageBox-enter, .fade-messageBox-leave-to {
        opacity: 0;
        transform: translateY(-100%) translateX(-50%);
    }
</style>