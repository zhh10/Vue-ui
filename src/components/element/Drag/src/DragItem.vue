<template>
    <div class="el-drag--item" :draggable="drag"
    @dragstart.stop="ondragStart"
    @dragenter.stop="ondragEnter"
    @dragend.stop="ondragEnd"
    :class="{'el-drag--dragable':drag===true,'el-drag--dragunable':drag===false}"
    >
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'elDragItem',
    props:{
        'drag':{type:Boolean,default:true}
    },
    mounted(){
        this.$parent.children.push(this.$el)
    },
    inject:['EventBus'],
    methods:{
        ondragStart(){
            this.$el.style.opacity = 0.3
            this.EventBus.$emit('dragstart',this.$el)
        },
        ondragEnter(){
            this.EventBus.$emit('dragenter',this.$el)
        },
        ondragEnd(){
            this.$el.style.opacity = 1
            this.EventBus.$emit('dragend',this.$el)
        }
    }
}
</script>
