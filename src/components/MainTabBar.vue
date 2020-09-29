<template>
     <Tabbar>
      <TabItem path="/home"   activeColor="#ff0">      
      <span slot="item-icon" class="iconfont  icon-shouye2 "></span>
      <span  slot="item-iconActive" class="iconfont  icon-shouye1 "></span>
       <div slot="item-text">首页</div>
      </TabItem>
      <TabItem path="/about"  activeColor="#ff0">
          <span slot="item-icon" class=" iconfont icon-dianying"></span>
          <span slot="item-iconActive" class=" iconfont icon-guanyu"></span>
          <div slot="item-text"> 关于</div>
      </TabItem>
      <TabItem path="/movie"  activeColor="#ff0">
         <span slot="item-icon" class=" iconfont icon-dianying"></span>
          <span slot="item-iconActive" class=" iconfont icon-dianying1"></span>
          <div slot="item-text">电影</div>
      </TabItem>
      <TabItem path="/profile"  activeColor="#ff0">
          <span slot="item-icon" class=" iconfont icon-wode"></span>
          <span  slot="item-iconActive" class=" iconfont icon-wode1"></span>
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
</style>