import Vue from 'vue'
// 引入路由
import VueRouter from 'vue-router'
const Home = () => import('../views/home/Home')
const About = () => import('../views/about/About')
const Movie = () => import('../views/movie/Movie')
const Profile = () => import('../views/profile/Profile') 
const routerReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(location) {
  return routerReplace.call(this, location).catch(error => error); 
}
// 安装插件
Vue.use(VueRouter)
// 创建路由对象
// 配置映射关系
const routes = [
      {
        path:'',    
    redirect:"/home"
      },
      {
        path:"/home",    
        // 懒加载
        component:Home
      },
      {
        path: "/about",
        // 懒加载
        component:About
      },
      {
        path:"/movie",  
        component:Movie
      },
      {
        path: "/profile",     
        component: Profile
      },
]
const router = new VueRouter({
  routes,
  mode: 'history',
})
// 对外暴露接口
export default router
