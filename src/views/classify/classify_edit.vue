<template>
   <div class="edit-classify">
<el-form :data="formData" class="from">
    <el-form-item label="分类名">
        <el-input v-model="formData.title"></el-input>
    </el-form-item>
    <el-form-item label="分类图片">
<imgUpload v-model="formData.icon"></imgUpload>
    </el-form-item>
    <el-form-item label="分类排序">
        <el-input-number v-model="formData.index" :min="1" :max="998"></el-input-number>
    </el-form-item>
    <el-form-item>
        <el-button @click="handleSave" type="danger" size="small">
            提交修改
        </el-button>
    </el-form-item>
</el-form>
   </div>
</template>
<script>
import imgUpload from '@/components/upload-com'
export default {
    components:{
        imgUpload
    },
    data(){
        return{
            formData:{
                title:'',
                icon:'',
                index:''
            }
        }
    },

    methods:{
        getData(){
            const id=this.$route.query.id
            this.$axios.get(`/category/${id}`).then(res=>{
                this.formData=res.data
            }).catch(()=>
                this.$message({
type:'info',
message:"err"
                })
            )
        },
        handleSave(){
            const id=this.$route.query.id
this.$axios.put(`/category/${id}`,this.formData).then(res=>{
    if(res.code==200){
        this.$message.success('修改成功')
        setTimeout(()=>{
            this.$router.push('/layout/classify')
        },1000)
    }else{
        this.$message.error(res.msg)
    }
})
        },
    },created(){
        this.getData()
    }
}
</script>
<style scoped lang="scss">
.edit-classify{
/deep/{
.upload-wrap{
    display: inline-block;
    width:50px;
    height:50px;
}
}
}
</style>

