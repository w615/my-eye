<template>
  <div id="tab-bar">  
    <slot></slot>
    </div>  
</template>
<script>
export default {
}
</script>
  
<style lang="scss">
// 动态的移入css
// @import '../../assets/css/tabbar/iconfont';

#tab-bar{
 position:fixed;
  left:0;
  bottom:0;
  right:0;
  display:flex;
  background: #888; 
 /* 缓冲的效果 */
  box-shadow: 0 -3px 1px rgba(100,100,100,.18)
}

</style>