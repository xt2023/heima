import Vue from 'vue'
import VueRouter from 'vue-router'
//导入路由组件
import Home from "@/views/Home/Home";
import User from "@/views/User/User";

//用use()函数在Vue安装VueRouter
Vue.use(VueRouter)

// 路由规则数组
const routes = [
  {path:'/',component:Home},
  {path: '/user',component: User}
]

//创建实例对象
const router = new VueRouter({
  routes
})

export default router
