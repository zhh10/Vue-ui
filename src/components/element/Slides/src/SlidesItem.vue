<template>
    <div class="el-slides--itemWrapper">
        <transition :name="transitionName">
            <div v-if="active" class="el-slides--item">
                <slot></slot>
            </div>
        </transition>
    </div>
    
</template>
<script>
export default {
    name:'ElSlidesItem',
    props:{
        name:{type:String,required:true}
    },
    inject:['type'],
    data(){
        return {
            selected:undefined,
            animationEnabled:false
        }
    },
    updated(){
        this.animationEnabled = true
    },
    computed:{
        active(){
            //  是否被选中了
            return this.selected === this.name
            // return true
        },
        transitionName(){
            if(this.type === 'slide'){
                return "slides";
            }
            if(this.type === 'fade'){
                return "fade";
            }
            return null
        }
    },
}
</script>
<style scoped>
.slides-enter{
    transform:translateX(100%);
}
.slides-enter-active, .slides-leave-active {
    transition: all .3s linear;
}
.slides-leave-to{
    transform:translateX(-100%);
}


.fade-enter,
.fade-leave-to{
  opacity:0
}

.fade-leave,
.fade-enter-to{
  opacity:1
}

.fade-enter-active,
.fade-leave-active{
  transition:all .3s linear;
}
</style>