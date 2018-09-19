<template>
    <div>
        <h2>修改个人信息</h2>
       <div class="form-wrap">
            <el-form :model="formData" size="small" label-position="left" label-width="80px">
          <el-form-item label="用户名">
                <el-input v-model="formData.username" :disabled="true">
                </el-input>  
            </el-form-item>  
            <el-form-item label="昵称">
                <el-input v-model="formData.nickname">
                </el-input>
            </el-form-item>
            <el-form-item label="邮箱">
                <el-input v-model="formData.email"></el-input>
            </el-form-item>
         
            <el-form-item label="用户头像">
                <uploadImg v-model="formData.avatar" style="float:left;"></uploadImg>
            </el-form-item>
            <el-form-item label="个性签名">
                <el-input type="textarea" v-model="formData.desc"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button size="small" type="primary" @click="handleClick">
                    保存更改
                    </el-button>
            </el-form-item>
        </el-form>
       </div>
    </div>
</template>
<script>
import uploadImg from '@/components/upload-com'
export default {
    name:"userEdit",
    components:{
        uploadImg
    },
    data(){
        return{
            formData:{
                username:'',
                nickname:'',
                email:'',
                desc:'',
                avatar:''
            }
        }
    },
    methods:{
        initData(){
            console.log(this.$store.state.userinfo)
            this.formData={
                ...this.$store.state.userinfo
            }
        },
        handleClick(){
            this.$axios.put('/user/userinfo',this.formData).then(res=>{
                if(res.code==200){
                    let userinfo=res.data
                    this.$store.commit('CHANGE_USERINFO',userinfo)
               this.initData()
               this.$message.success(res.msg)
               }
            })
        }
    },
    created(){
        console.log('SDD')
        this.initData()
    }
}
</script>
<style scoped>
.form-wrap{
    margin-top:20px;
    width:600px;
}
</style>

