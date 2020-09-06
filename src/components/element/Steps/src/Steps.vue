<template>
    <div class="el-steps">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:"ElSteps",
    props:{
        active:{type:Number,default:0,required:true},
    },
    data(){
        return {
            steps:[],
            prop:{active:this.active}
        }
    },
    updated(){
        this.prop.active = this.active
    },
    provide(){
        return {
            prop:this.prop
        }
    },
}
</script>