<template>
    <div ref="wrapper" :style="{height}">
        <div class="el-sticky" :class="{'is-sticky':sticky}" :style="{width,left,top}">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    name:'ElSticky',
    props:{
        distance:{
            type:Number,
            default:0,
        }
    },
    data(){
        return {
            sticky:false,
            height:undefined,
            width:undefined,
            left:undefined,
            top:undefined
        }
    },
    mounted(){
        this._windowScrollHandler = this.windowScrollHandler.bind(this);
        window.addEventListener('scroll',this._windowScrollHandler);
    },
    beforeDestroy(){
        // 销毁事件 以免组件销毁后仍在监听
        window.removeEventListener('scroll',this._windowScrollHandler);
    },
    methods:{
        offsetTop(){
            const {top} = this.$refs.wrapper.getBoundingClientRect() 
            // 当top为负数时，说明元素在浏览器屏幕下边
            return {top:top + window.scrollY}
        },
        windowScrollHandler(){
            let {top} = this.offsetTop() 
            if(window.scrollY > top - this.distance){
                // 说明元素已经在浏览器屏幕下方
                // 获取宽高 赋值给外层div 否则脱离文档流 
                const {height,left,width} = this.$refs.wrapper.getBoundingClientRect() 
                this.height = `${height}px`;
                this.left = `${left}px`;
                this.width = `${width}px`;
                this.top = `${this.distance}px`;
                this.sticky = true;
            }else{
                this.height = undefined;
                this.width = undefined;
                this.top = undefined;
                this.left = undefined;
                this.sticky = false;
            }
        }
    }
}
</script>