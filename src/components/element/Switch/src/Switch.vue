<template>
    <div class="el-switch">
        <span ref="trueText" @click="toggle(true,$event)" v-if="trueText" class="el-switch--text">{{falseText}}</span>
        <span class="el-switch--wrapper" 
        @click="toggle(value,$event)"
        ref="wrapper"
        :class="{'is-active':value,'is-disabled':disabled}"
        :value="value" :style="wrapperStyle">
            <span class="el-switch--inner" :style="innerStyle"></span>
        </span>
        <span ref="falseText" @click="toggle(false,$event)" v-if="falseText" class="el-switch--text">{{trueText}}</span>
    </div>
</template>
<script>
export default {
    name:'ElSwitch',
    props:{
        value:{type:Boolean,default:false},
        width:{type:String,default:'40px'},
        disabled:Boolean,
        falseText:String,
        trueText:String,
        falseColor:String,
        trueColor:String,
        trueTextColor:String,
        falseTextColor:String
    },
    computed: {
        wrapperStyle(){
            return `width:${this.width};height:${parseInt(this.width)/2}px;border-radius:${parseInt(this.width)/4}px`;
        },
        innerStyle(){
            return `width:${parseInt(this.width)/2-4}px;height:${parseInt(this.width)/2-4}px`;
        }
    },
    methods:{
        toggle(val,e){
            if(this.disabled){ return }
            let newValue
            console.log(e.target.className)
            if(e.target.className === 'el-switch--text'){
                console.log(123)
                newValue = val
            }else{
                console.log(456)
                newValue = !val
            }
            console.log(newValue)
            this.$emit('input',newValue) //更改v-model="value"
            this.$emit('valueChange',newValue)//触发事件valueChange
            if(this.falseColor && newValue){
                this.$refs.wrapper.style.background = this.trueColor;
            }
            if(this.trueColor && !newValue){
                this.$refs.wrapper.style.background = this.falseColor;
            }
            if(this.trueText && newValue === true){
                this.$refs.trueText.style.color=this.trueTextColor;
                this.$refs.falseText.style.color = '#303133';
            }
            if(this.falseText && newValue === false){
                this.$refs.falseText.style.color = this.falseTextColor;
                this.$refs.trueText.style.color = '#303133';
            }
        }
    }
}
</script>