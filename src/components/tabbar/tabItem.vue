<template>
  <div class="tabbar-item" @click="itemClick">  
    <div v-if=" !isActive"> <slot  name="item-icon"></slot></div>     
    <div v-else><slot  name="item-iconActive"></slot></div>      
    <div :class="{active: isActive}" ><slot name="item-text"></slot></div>       
</div>   
</template>
<script>
export default {
  name:'TabItem',
  // 动态传入路由
  props:{
    path:String,
  },
  data(){
    return {
      isActive:true
    }
  },
  methods:{
    itemClick(){
      console.log(this.path);
      this.$router.replace(this.path)
    }
  }
}
</script>
<style lang="scss">
.tabbar-item{
  margin-top:3px;
  text-align:center;
  flex:1;
  height:3.0625rem;
  font-size:14px;
}
.active{
  color:red;
}
</style>