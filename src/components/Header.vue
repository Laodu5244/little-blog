<template>
  <div class="header">
    <div class="logo">
      <div class="text">Vue 博客系统：让天下没有难学的技术!</div>
    </div>
    <div class="nav">
      <router-link to="/blog" exact @click='change'>
        博客列表
      </router-link>
      <router-link to="/add" exact @click='change'>
        添加博客
      </router-link>
    </div>
  </div>
</template>

<script>
export default{
  data(){
    return{
      
    }
  },
  methods:{
    change(i){
      console.log(i)
    }
  }
}
</script>

<style lang="less" scoped>
.header {
  position: fixed;
  left: 168px;
  top: 0;
  right: 0;
  box-shadow: 0 0 20px rgba(65, 184, 131, 0.5);
  height: 80px;
  background: #41b883;
  display: flex;
  justify-content: space-around;
  padding: 0 50px;
  z-index: 999;
  .logo {
    display: flex;
    align-items: center;
    .text {
      letter-spacing: 1px;
      margin-left: 12px;
      color: #f4f4f4;
      font-size: 20px;
      font-style: italic;
    }
  }
  .nav {
    display: flex;
    align-items: center;
    a {
      display: inline-block;
      border-radius: 15px;
      margin: 5px;
      padding: 5px 10px;
      font-size: 16px;
      color: #f4f4f4;
      &.router-link-active {
        background-color: #f4f4f4;
        color: #41b883;
      }
    }
  }
}
</style>
