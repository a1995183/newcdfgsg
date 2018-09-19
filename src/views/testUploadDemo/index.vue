<template>
    <div>
        <!-- <h1>上传图片测试页</h1>
<h2>传统表单上传</h2>
<div>
    <form action="https://upload-z1.qiniup.com" method="post" enctype="multipart/form-data">
    <input type="file" name="file">
    <br>
    <input type="text" name="token" v-model="token">
    <br>
    <button>提交</button>
    </form>
</div> -->
<!-- <h2>ajax上传图片</h2>
<input type="file" @change="handleChange"><br>
<img :src="imgData" width="200" height="200"> -->
<checkboxCom v-model="myCheckBox"></checkboxCom>
<uploadCom @success='uploadImg'></uploadCom>
   <div style="border:1px solid #000">
       <img :src="imgData" >
   </div>
    </div>
</template>
<script>
import uploadCom from '@/components/upload-com'
import checkboxCom from '@/components/checkbox-com'
import axios from 'axios'
export default {
    name:"index",
    components:{
        uploadCom,
        checkboxCom
    },
    data(){
        return{
            token:'',
            imgData:'',
            myCheckBox:''
        }
    },
    methods:{
        getToken(){
            axios.get('http://upload.yaojunrong.com/getToken').then(res=>{
                this.token=res.data.data
            })
        },
         handleChange(event){
let file=event.target.files[0]
let formData=new FormData()
formData.append('file',file,file.name)
formData.append('token',this.token)
axios.post('https://upload-z1.qiniup.com',formData,{
    headers:{
        'Content-type':'multipart/form-data'
        // 'Content-type':'application/x-www-form-urlencoded',
        // 'Content-type':'application/json',
    }
    //测试postman
}).then(res=>{
this.imgData=res.data.url
console.log(this.imgData)
})
    },
    uploadImg(url){
this.imgData=url
    }
    },
   
    created(){
        this.getToken()
    }
}
</script>
<style scoped>

</style>
