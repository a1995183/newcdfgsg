import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const components={
  login:()=>import('@/views/login/login'),
  layout:()=>import('@/views/layout/layout'),
  //index:()=>import('@/views/index/index'),
  index:() => import('@/views/index/index'),
  users:()=>import('@/views/users/user'),
  userEdit:()=>import('@/views/userEdit/userEdit'),
  testUploadDemo:()=>import('@/views/testUploadDemo/index')
  ,adduser:()=>import('@/views/addUser/addUser'),
  classify:()=>import('@/views/classify/classify'),
  classify_add:()=>import('@/views/classify/classify_add'),
  classifyEdit:()=>import('@/views/classify/classify_edit'),
  addSwiper:()=>import('@/views/swiper/addswiper')
}
let router= new Router({
  routes: [
    {
      path: '/',
    redirect:"/login",
    meta:{
      title:'首页'
    }
    },
    {
path:'/login',
name:'login',
component:components.login,
meta:{
  title:'登录'
}
    },
    {
      path:'/layout',
      component:components.layout,
      // redirect:'/layout/testUploadDemo',
      redirect:'/layout/index',
      children:[  
        {
        path: 'index',
        component:components.index,
        meta:
        {
          title:'首页'
        }
        
      },
      {
        path:'users',
        component:components.users,
        meta:{
          title:'用户管理'
        }
      },
      {
        path:'userEdit',
        component:components.userEdit,
        meta:{
          title:'修改信息'
        }
      },
      {
        path:'testUploadDemo',
        component:components.testUploadDemo,
        meta:{
          title:'修改信息'
        }
      },
      {
        path:'addUser',
        component:components.adduser,
        meta:{
          title:'添加管理'
        }
      },
      {
        path:'classify',
        component:components.classify,
        meta:{
          title:'分类列表'
        }
      },
      {
        path:'classify_add',
        component:components.classify_add,
        meta:{
          title:'添加分类'
        }
      },
        {
          path:'classifyEdit',
          component:components.classifyEdit,
          name:"classifyEdit",
          meta:{
            title:'编辑分类'
          }
      },
      {
        path:'addSwiper',
        component:components.addSwiper,
        name
      }
    ]
    }
  ]
})
router.beforeEach((to,from,next)=>{
  if(to.meta&&to.meta.title){
    document.title=to.meta.title
  }
  next()
})
export default router;