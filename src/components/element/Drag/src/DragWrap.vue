<template>
    <div class="el-drag--wrap" ref="wrap" @dragover.prevent>
        <!-- 阻止dragover的默认事件 -->
        <slot></slot>
    </div>
</template>
<script>
import Vue from 'vue'
export default {
    name:'elDragWrap',
    props:{
        data:Array
    },
    data(){
        return {
            EventBus:new Vue(),
            fromDom:null,
            toDom:null,
            children:[],
        }
    },
    created(){
        this.EventBus.$on('dragstart',this.onDragStart)
        this.EventBus.$on('dragenter',this.onDragEnter)
        this.EventBus.$on('dragend',this.onDragEnd)
    },
    provide(){
        return {
            'EventBus':this.EventBus
        }
    },
    methods:{
        onDragStart(el){
            this.fromDom = el 
        },
        onDragEnter(el){
            this.toDom = el
            // 判断fromDOm是否和toDom是同一个 还是 哪个是前哪个是后
            if(this.isPrevious(this.fromDom,this.toDom)){
                // toDom在fromDom前面
                this.$refs['wrap'].insertBefore(this.fromDom,this.toDom)
            }else{
                // toDom在fromDom后面
                this.$refs['wrap'].insertBefore(this.fromDom,this.toDom.nextElementSibling)
            }
        },
        onDragEnd(el){
            let realList = [...this.$el.children]
            let order = realList.map(item => {return this.children.findIndex(i => i === item)}) 
            let newData = [] 
            order.forEach((item,index) => {
                newData[index] = this.data[item]
            })
            this.$emit('update:data',newData)

        },
        isPrevious(from,to){
            while(from.previousElementSibling !== null){
                if(from.previousElementSibling === to){
                    // 说明toDom在fromDom 的前面
                    return true
                }
                from = from.previousElementSibling
            }
        }
    }
}
</script>