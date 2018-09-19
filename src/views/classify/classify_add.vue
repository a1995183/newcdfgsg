<template>
   <div class="edit-classify">
<el-form :data="formData" class="from">
    <el-form-item style="width:500px;" label="分类名">
        <el-input v-model="formData.title"></el-input>
    </el-form-item>
    <el-form-item label="分类图片">
<imgUpload v-model="formData.icon"></imgUpload>
    </el-form-item>
    <!-- <el-form-item label="分类排序">
        <el-input-number v-model="formData.index" :min="1" :max="998"></el-input-number>
    </el-form-item> -->
    <el-form-item>
        <el-button @click.native="handleSave" type="danger" size="small">
            提交
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
                icon:''
                // index:'500'
            }
        }
    },

    methods:{
        handleSave(){
            this.$axios.post('/category',this.formData).then(res=>{
                if(res.code==200){
                    this.$message.success(res.msg)
                    setInterval(()=>{     
                    this.$router.push('/layout/classify')
                    },1000)
               
                }else{
                    // this.$message.console.error(res.msg);
                    console.log(res.msg)
                    
                }
            })
        }
    },created(){
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

