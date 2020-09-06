<template>
    <div class="el-breadcrumb">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'ElBreadcrumb',
    props:{
        separator:String,
    },
    provide(){
        return {
            separator:this.separator
        }
    }
}
</script>