<template>
  <div id="app">
    <!-- 无法接收路由 -->
    <!-- <Home/>  -->
       <router-view></router-view>  
       <MainTabBar/>
  </div>
</template>
<script>
import MainTabBar from './components/MainTabBar'


export default{
  name:'App',
  components:{
    MainTabBar,
   
  }
}
</script>
<style lang="scss">
// 动态引入公共的样式 使用@import的方式
@import  './assets/css/base.css';
</style>
