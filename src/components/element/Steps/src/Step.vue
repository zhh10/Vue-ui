<template>
    <div class="el-step--item" :class="{'is-success':success,
                                            'is-doing':doing,
                                            'is-waiting':waiting}">
        <div class="el-step--head">
            <template v-if="icon">
                <div >
                    <el-icon :name="icon" class="el-step--icon"></el-icon>
                </div>
            </template>
            <template v-else>
                <div class="el-step--number" v-if="success"><el-icon name="check"></el-icon></div>
                <div class="el-step--number" v-else>{{stepIndex + 1}}</div>
            </template>
            <div class="el-step--line"></div>
        </div>
        <div class="el-step--text" :class="{'is-icon':icon}">{{title}}</div>
        <div class="el-step--description">{{description}}</div>
    </div>
</template>
<script>
export default {
    name:"ElStep",
    inject:['prop'],
    props:{
        title:{type:String,required:true},
        icon:String,
        description:String
    },
    data(){
        return {
            stepIndex:undefined
        }
    },
    computed:{
        success(){
            return this.stepIndex < this.prop.active
        },
        doing(){
            return this.stepIndex === this.prop.active
        },
        waiting(){
            return this.stepIndex > this.prop.active
        }
    },
    beforeCreate(){
        this.$parent.steps.push(this)
    },
    mounted(){
        let index = this.$parent.steps.indexOf(this)
        this.stepIndex = index
    },
    
    
}
</script>