<template>
    <div>
        <h2>分类图书列表</h2>
         <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="title"
        label="分类名"
        width="180">
      </el-table-column>
      <el-table-column
      
        label="封面"
        width="180">
            <template slot-scope="scope">
                <img :src="scope.row.icon" width="50" height="50">
            </template>
      </el-table-column>
      <el-table-column
        prop="index"
        label="排序"
         width="120">
      </el-table-column>
      <el-table-column
        prop="index"
        label="操作">
        <!-- slot-scope只修改s数据样式继承父组件 -->
 <template slot-scope="scope">
<el-button type="primary" size="small" @click="handleEdit(scope.row._id)">编辑</el-button>
<el-button type="danger" size="small" @click="handleDelete(scope.row._id)">删除分类</el-button>
 </template>
      </el-table-column>
    </el-table>

    <el-pagination
background
:page-size="9"
layout="prev,pager,next"
@current-change="pageChange"
:total="count"
>

</el-pagination>
    </div>
</template>
<script>
export default {
    data(){
        return{
tableData:[],
count:0,
page:1
        }
    },
    methods:{
getData(){
this.$axios.get('/category',{pn:this.page,size:9}).then(res=>{
    if(res.code==200){
        this.count=res.count
        this.tableData=res.data
    }
})
},handleEdit(id){
this.$router.push({name:'classifyEdit',query:{id}})
},
handleDelete(id){
    this.$confirm('此操作将删除该分类，请确认该分类下没有图书。','提示',{
        confirmButtonText:'确认',
        cancelButtonText:'取消',
        type:'warning',
        center:true
    }).then(()=>{
            console.log('sdaag')
        this.$axios.delete('/category/${id}').then(res=>{
            console.log('sdg')
            if(res.code==200){
            
                this.$message({
            type:'info',
            message:'已成功删除'
        })
                this.getData()
            }else{
                this.$message({
            type:'info',
            message:'删除失败'
        })
            }
        })
    }).catch((err)=>{
        console.log(err)
        this.$message({
            type:'info',
            message:'已取消删除'
        })
    })
},pageChange(page){
    this.page=page
    this.getData()
}
    },
    created(){
this.getData()
    }
}
</script>

