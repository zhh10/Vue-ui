<template>
    <div class="el-upload">
        <div class="el-upload--main" :class="{'is-disabled':disabled}" @click="ClickUpload">
            <div><el-icon name="upload" class="el-icon--left"></el-icon>点击上传</div>
        </div>
        <div class="el-upload--tip" v-if="showTip">{{showTip}}</div>
        <ul class="el-upload--ul">
            <transition-group>
                <template v-for="(item,index) in fileList">
                    <li :key="index" class="el-upload--li">
                        <template v-if="item.status !== 'large'">
                            <a :href="item.url" class="el-upload--a" 
                            :class="{'is-success':item.status === 'success',
                                 'is-uploading':item.status === 'uploading',
                                 'is-fail':item.status === 'fail'}">
                                <span v-if="item.status === 'uploading'"><el-icon name="loading"></el-icon></span>
                                <span v-if="item.status ==='success'"><el-icon name="document-checked"></el-icon></span>
                                <span v-if="item.status === 'fail'"><el-icon name="document-delete"></el-icon></span>
                                {{item.name}}
                            </a>
                        </template>
                        <template v-else>
                            <a href="" class="el-upload--a is-fail">
                                <span><el-icon name="folder-delete"></el-icon></span>
                                文件过大，上传失败
                            </a>
                        </template>
                        <span class="el-upload--close" @click="handleRemove(item,fileList)"><el-icon name="close"></el-icon></span>
                    </li>
                </template>
            </transition-group>
        </ul>
        <div ref="temp" style="width:0;height:0;overflow:hidden;"></div>
    </div>
   
</template>
<script>
export default {
    name:'ElUpload',
    props:{
        action:{type:String,required:true},
        method:{type:String,required:true},
        accept:{type:String,required:true},
        name:{type:String,required:true},
        parseResponse:{type:Function,required:true},
        fileList:{type:Array,required:true},
        sizeLimit:Number,
        showTip:String,
        onRemove:Function,
        disabled:{type:Boolean,default:false},
        multiple:{type:Boolean,default:false}
    },
    methods:{
        ClickUpload(){
            if(!this.disabled){
                let Input = this.createInput();
                // 创造一个Input
                Input.addEventListener('change',()=>{
                //监听change事件
                this.UploadFile(Input.files)
                Input.remove()
                })
                Input.click();
            }else{
                return false;
            }
            
        },
        createInput(){
            let Input = document.createElement('input');
            Input.type = 'file';
            Input.name = this.name;
            Input.accept = this.accept;
            Input.multiple = this.multiple;
            this.$refs.temp.appendChild(Input);
            return Input
        },
        UploadFile(rawFiles){
            // 避免重复的名字
            let newNames = [];
            for(let i = 0;i<rawFiles.length;i++){
                let rawFile = rawFiles[i];
                const {name,size,type} = rawFile;
                const newName = this.generateName(name)
                newNames.push(newName)
            }
            // 先进行上传前的处理
            if(!this.beforeUploadFiles(rawFiles,newNames)){
                return false;
            }
            this.$nextTick(()=>{
                for(let i = 0;i<rawFiles.length;i++){
                // 逐个上传
                let rawFile = rawFiles[i];
                let newName = newNames[i];
                const file = this.fileList.filter(f => f.name === newName)[0]
                if(this.sizeLimit && file.size>this.sizeLimit){
                   continue 
                }else{
                    let formData = new FormData()
                    formData.append(this.name,rawFile)
                    this.upLoadForm(formData,newName,this.parseResponse)
                }
              }
              
            })
        },
        beforeUploadFiles(rawFiles,newNames){
            rawFiles = Array.from(rawFiles)
            
            let x = rawFiles.map((rawFile,index) => {
                let {name,type,size} = rawFile;
                // 查看文件是否超过文件大小限制
                if(this.sizeLimit && size>this.sizeLimit){
                    return {name:newNames[index],size,type,status:'large'}
                }else{
                    return {name:newNames[index],size,type,status:'uploading'}
                }
            })
            this.$emit('update:fileList',[...this.fileList,...x])
            return true;
        },
        // 上传结束后的操作
        afterUploadFiles(newName,url){
            let file = this.fileList.filter(f => f.name === newName)[0]
            let index = this.fileList.indexOf(file)
            let fileCopy = JSON.parse(JSON.stringify(file))
            fileCopy.url = url;
            fileCopy.status = 'success';
            let fileListCopy = [...this.fileList];
            fileListCopy.splice(index,1,fileCopy);
            this.$emit('update:fileList',fileListCopy)
        },
        ErrorUploadFile(newName){
            let file = this.fileList.filter(f => f.name === newName)[0]
            let index = this.fileList.indexOf(file)
            let fileCopy = JSON.parse(JSON.stringify(file))
            fileCopy.status = 'fail'
            let fileListCopy = [...this.fileList];
            fileListCopy.splice(index,1,fileCopy);
            this.$emit('update:fileList',fileListCopy)
        },
        generateName(name){
            while(this.fileList.filter(item => item.name === name).length > 0){
                const lastIndex = name.lastIndexOf('.');
                const nameItem = name.substring(0,lastIndex);
                const suffix = name.substring(lastIndex);
                name = `${nameItem}(1)${suffix}`;
            }
            return name;
        },
        // 上传文件
        upLoadForm(formData,newName,parseResponse){
            var self = this;
            var xhr = new XMLHttpRequest();
            xhr.open('POST',this.action);
            xhr.onload = function(){
                let url = parseResponse(xhr.response)
                url ? self.afterUploadFiles(newName,url):self.ErrorUploadFile(newName)
            }
            xhr.send(formData)
        },
        handleRemove(file,fileList){
            this.onRemove && this.onRemove(file,fileList)
        }
    }
}
</script>
<style scoped>
.v-enter,
.v-leave-to {
opacity: 0;
transform: translateX(100px);
}
.v-enter-active,
.v-leave-active {
transition: transform .5s;
}
.v-leave,
.v-enter-to {
opacity: 1;
transform: translateX(0px);
}
.v-move {
transition: transform .5s; 
}
</style>