<template>
<div class="layout">
    <div class="header ml-200">
        <h1 class="title">
            云书后台操作系统
        </h1>
         <div class="user-img">
        
            <el-dropdown>
  <span class="el-dropdown-link">
    <img width="50" height="50" :src="formData.avatar"> <i class="el-icon-arrow-down el-icon--right"> </i>
  </span>
  <el-dropdown-menu  placement="top-end" slot="dropdown">
    <el-dropdown-item  @click.native="handleRouters('/layout/userEdit')" to="{path:'/layout/userEdit'}">个人中心</el-dropdown-item>
    <el-dropdown-item   @click.native="handleLogout">退出登录</el-dropdown-item>    
  </el-dropdown-menu>
</el-dropdown>
        </div>
    </div>
    <div class="side-bar">

          <el-menu
          :router="true"
          background-color="#545c64"
          text-color="#fff"
      default-active="2">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>用户管理</span>
        </template>
        <el-menu-item-group>
          <template slot="title"></template>
          <el-menu-item index="/layout/index">首页</el-menu-item>
          <el-menu-item index="/layout/userEdit">修改个人信息</el-menu-item>
          <el-menu-item index="/layout/addUser">添加管理员</el-menu-item>
          <el-menu-item index="/login">登录页</el-menu-item>
          <el-menu-item index="/layout/users">用户管理页面</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      
     <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>分类管理</span>
        </template>
          <el-menu-item-group>
          <el-menu-item index="/layout/classify">分类列表</el-menu-item>
          <el-menu-item index="/layout/classify_add">添加分类</el-menu-item>
        </el-menu-item-group>
     </el-submenu>

      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>轮播图管理</span>
        </template>
          <el-menu-item-group>
          <el-menu-item index="/layout/addswiper">添加轮播图</el-menu-item>
          <el-menu-item index="">轮播图管理</el-menu-item>
        </el-menu-item-group>
     </el-submenu>
    </el-menu>
    </div>
    <div class="main-content ml-200">
       
        <router-view></router-view>
    </div>
    </div>
</template>
<script>
export default {
    name:"layout",
    data(){
        return{
            formData:{
                avatar:''
            }
        }
    },
    
    methods:{
  handleRouters(command) {
        this.$router.push(command)
      },
       handleLogout () {
            this.$axios.get('/logout').then(res => {
            if(res.code ==200){
                 let payload = {username: '', avatar: '', email: '', desc: '',nickname:''}
                this.$message.success('退出登录成功')
                this.$store.userinfo=payload
                this.$router.push('/login')
            } else {
                this.$message.error("s"+res.msg)
            }
            }).catch(err => {
            this.$message.error(err)
            })
      }
    ,
    },
 
    created(){
     this.formData.avatar=this.$store.state.userinfo.avatar   
     console.log(this.$store.state.userinfo.avatar)
    }
}
</script>
<style scoped lang="scss">
.layout{
    .title{
        text-align:center;
        font-weight: 400;
        line-height: 60px;
        height:60px;
        border-bottom: 1px solid #f1f1f1;
        font-size:20px;
    }
    .ml-200{
            margin-left:200px;
            .user-img{
                width: 50px;
                height: 50px;
                position: fixed;
                top: 8px;
                right:40px;
                border-radius: 50%;
                // background:#111;
                overflow:hidden;
            }
    }
    .side-bar{
        position:fixed;
        top:0;
        bottom:0;
        left:0;
        padding-top: 60px;
        width:200px;
        border-right: 1px solid #f1f1f1;
        overflow: hidden;
        background: #545c64;
    /deep/{
        .el-menu{
            border-right:none;
        }
    }
  i:before {
    content:none;
}
    }
    .main-content{
        padding:15px;
    }
 
}

</style>

