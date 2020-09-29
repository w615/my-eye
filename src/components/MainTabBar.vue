<template>
  <Tabbar>
    <!-- 1 -->
  <TabItem path="/home"   activeColor="#ff0">  
  <svg  slot="item-icon" class="icon" aria-hidden="true">
    <use xlink:href="#icon-shouye"></use>
  </svg>    
  <!-- <span slot="item-icon" class="iconfont  icon-shouye2 "></span> -->
  <svg  slot="item-iconActive" class="icon" aria-hidden="true">
    <use xlink:href="#icon-shouye1"></use>
  </svg>
  <!-- <span  slot="item-iconActive" class="iconfont  icon-shouye1 "></span> -->
    <div slot="item-text">首页</div>
  </TabItem>
  <!-- 2 -->
  <TabItem path="/about"  activeColor="#ff0">
     <svg  slot="item-icon" class="icon" aria-hidden="true">
      <use xlink:href="#icon-guanyu1"></use>
    </svg>
      <!-- <span slot="item-icon" class=" iconfont icon-dianying"></span> -->
    <svg  slot="item-iconActive" class="icon" aria-hidden="true">
      <use xlink:href="#icon-guanyu"></use>
    </svg>
      <!-- <span slot="item-iconActive" class=" iconfont icon-guanyu"></span> -->
      <div slot="item-text"> 关于</div>
  </TabItem>
  <!-- 3 -->
  <TabItem path="/movie"  activeColor="#ff0">
      <svg  slot="item-icon" class="icon" aria-hidden="true">
         <use xlink:href="#icon-dianying"></use>
      </svg>
      <!-- <span slot="item-icon" class=" iconfont icon-dianying"></span> -->
      <svg  slot="item-iconActive" class="icon" aria-hidden="true">
        <use xlink:href="#icon-dianying1"></use>
      </svg>
      <!-- <span slot="item-iconActive" class=" iconfont icon-dianying1"></span> -->
      <div slot="item-text">电影</div>
  </TabItem>
  <!-- 4 -->
  <TabItem path="/profile"  activeColor="#ff0">
      <svg  slot="item-icon" class="icon" aria-hidden="true">
        <use xlink:href="#icon-dianying"></use>
      </svg>
      <!-- <span slot="item-icon" class=" iconfont icon-wode"></span> -->
      <svg  slot="item-iconActive" class="icon" aria-hidden="true">
        <use xlink:href="#icon-dianying1"></use>
      </svg>
      <!-- <span  slot="item-iconActive" class=" iconfont icon-wode1"></span> -->
      <div slot="item-text">我的</div>
  </TabItem>
</Tabbar> 
</template>
<script>
import Tabbar from './tabbar/tabbar'
import TabItem from './tabbar/tabItem'
export default {
  components:{
    Tabbar,
    TabItem
  }
}
</script>
<style lang="scss">
.icon{
  width: 22px!important;
  height: 22px!important;
}
</style>