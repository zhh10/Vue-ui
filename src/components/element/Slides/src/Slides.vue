<template>
    <div class="el-slides"  @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
        <div class="el-slides--wrapper" ref="wrapper" :style="{width:width,height:height}">
            <slot></slot>
        </div>
        <ul class="el-slides--dots" :class="{'is-outside':direction==='outside'}" v-if="showDots">
            <template v-for="(item,index) in childrenLength">
                <li :key="index" class="el-slides--dot" 
                :class="{'is-active':index === selectedIndex}"
                @click="clickDot(index)"></li>
            </template>
        </ul>
        <div class="el-slides--btns" v-if="showBtn">
            <span class="el-slides--btn el-slides--left" @click="onClickPrev">
                <el-icon name="arrow-left"></el-icon>
            </span>
            <span class="el-slides--btn el-slides--right" @click="onClickNext">
                <el-icon name="arrow-right"></el-icon>
            </span>
        </div>
    </div>
</template>
<script>
export default {
    name:'ElSlides',
    props:{
        autoPlay:{type:Boolean,default:true},
        delayTime:{type:Number,default:3000},
        showDots:{type:Boolean,default:false},
        showBtn:{type:Boolean,default:false},
        width:{type:String,required:true},
        height:{type:String,required:true},
        selected:String,
        type:{type:String,default:'slide',validator:item => ['slide','fade'].includes(item)},
        direction:String,
    },
    provide(){
        return {
            type:this.type
        }
    },
    data(){
        return {
            lastSelectedIndex:undefined,
            timeId:undefined,
            childrenLength:undefined
        }
    },
    computed:{
        items(){
            return this.$children.filter(vm => vm.$options.name === 'ElSlidesItem')
        },
        names(){
            return this.items.map(item => item.name)
        },
        selectedIndex(){
            let index = this.names.indexOf(this.selected)
            return index === -1 ? 0 : index
        },
    },
    mounted(){
        if(this.autoPlay){
            this.autoPlayMethod()
        } 
        this.childrenLength = this.items.length
    },
    updated(){
        this.childrenLength = this.items.length
        this.items.forEach(vm => {vm.selected = this.selected})
    },
    methods:{
        autoPlayMethod(){
            let run = () => {
                let newIndex = this.selectedIndex + 1 
                this.select(newIndex)
                this.timeId = setTimeout(run,this.delayTime)
            }
            this.timeId = setTimeout(run,this.delayTime)
        },
        select(newIndex){
            this.lastSelectedIndex = this.selectedIndex
            if(newIndex === -1){newIndex = this.names.length - 1}
            if(newIndex === this.names.length){newIndex = 0}
            this.$emit("update:selected",this.names[newIndex])
        },
        onMouseEnter(e){
            this.pause() //暂停轮播图
        },
        onMouseLeave(e){
            this.autoPlayMethod() // 开启轮播图
        },
        pause(){
            window.clearTimeout(this.timeId) // 清除定时器
            this.timeId = undefined
        },
        clickDot(index){
            this.$emit('update:selected',this.names[index])
        },
        onClickPrev(){
            this.select(this.selectedIndex - 1)
        },
        onClickNext(){
            this.select(this.selectedIndex + 1)
        }
    }
}
</script>