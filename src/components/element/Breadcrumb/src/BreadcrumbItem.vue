<template>
    <span class="el-breadcrumb--item">
        <span class="el-breadcrumb--text" :class="{'is-skip':to || replace}" 
        @click="handleClick"
        ><slot></slot></span>
        <span v-if="!separator" class="el-breadcrumb--separator">/</span>
        <span v-if="separator" class="el-breadcrumb--separator">
            <el-icon :name="separator" ></el-icon>
        </span>
    </span>
</template>
<script>
export default {
    name:'ElBreadcrumbItem',
    props:{
        to:String,
        replace:String,
    },
    inject:['separator'],
    methods:{
        handleClick(){
            if(this.to){
                this.$route.push(this.to)
            }else if(this.replace){
                this.$route.replace(this.replace)
            }
        }
    }
}
</script>