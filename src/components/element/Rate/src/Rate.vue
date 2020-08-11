<template>
    <div class="el-rate">
        <template v-for="(item,index) in max">
            <span :key="index" class="el-rate--item">
                <el-icon name="star-off" class="el-rate--Officon el-icon--right" 
                    @mousemove.native="handleMouseMove(index)"
                    @mouseleave.native="handleMouseLeave"
                    @click.native = "handleClick(index)"
                    v-show="index+1 > newScore">
                </el-icon>
                <el-icon name="star-on" class="el-rate--Onicon el-icon--right" 
                    @mousemove.native="handleMouseMove(index)"
                    @mouseleave.native="handleMouseLeave"
                    @click.native = "handleClick(index)"
                    v-show="index+1 <= newScore">
                </el-icon>
            </span>
        </template>
        <span v-if="showText && newScore > 0" class="el-rate--text">{{newScore}}</span>
    </div>
</template>
<script>
export default {
    name:'ElRate',
    props:{
        max:{
            type:Number,
            default:5,
        },
        value:Number,
        disabled:Boolean,
        showText:Boolean,
    },
    data(){
        let score = this.value ? this.value : 0
        return {
            score,
            newScore:score,
        }
    },
    methods: {
        handleMouseMove(val){
            if(!this.disabled){
                this.newScore = val + 1;
            }
        },
        handleMouseLeave(){
            if(!this.disabled){
                this.newScore = this.score;
            }
        },
        handleClick(val){
            if(!this.disabled){
                this.score = val + 1;
                // this.$emit('update:score',this.value)
                this.$emit('input',this.score)
            }
        }
    }

}
</script>