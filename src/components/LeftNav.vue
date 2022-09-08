<template>
  <div class="left-nav">
    <img src="@/assets/images/logo.svg" @click="toAbout"/>
    <div class="container">
      <router-link to="/home" exact>
        <i class="el-icon-reading"></i>
        <div>主页</div>
      </router-link>
      <router-link to="/classify" exact>
        <i class="el-icon-tickets"></i>
        <div>分类</div>
      </router-link>
       <router-link to="/Blog" exact>
        <i class="el-icon-tickets"></i>
        <div>博客</div>
      </router-link>
      <router-link to="/add" exact>
        <i class="el-icon-edit-outline"></i>
        <div>添加</div>
      </router-link>
      <router-link to="/about" exact>
        <i class="el-icon-s-custom"></i>
        <div>关于</div>
      </router-link>
    </div>
    <div class="github">
      <a href="https://github.com/Laodu5244">Github</a>
    </div>
  </div>
</template> 

<script>
export default {
  name:'LeftNav',
  methods:{
    toAbout(){
      this.$confirm("前往个人中心?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        this.$message({
          type: "success",
          showClose: true,
          message: "已经成功跳转",
        });
        this.$router.push('/about')
      }).catch(() =>{
        this.$message({
          type: "success",
          message: "已经返回",
        });
      })
    },
  }
};
</script>

<style scoped lang="less">
.left-nav {
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 168px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.8);
  img {
    width: 54px;
    margin: 50px auto;
    cursor: pointer;
  }
  .container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      padding: 15px 0;
      cursor: pointer;
      font-size: 18px;
      border-left: 5px solid rgba(0, 0, 0, 0);
      &.router-link-active {
        color: #41b883;
        border-left: 5px solid #41b883;
      }
      div {
        margin-left: 18px;
      }
    }
  }
}

.left-nav a:hover {
  background-color: rgb(0, 0, 0, 0.3);
}
.github a{
  color:#f5f5f5;
  cursor: pointer;
  position:absolute;
  bottom:50px;
  left: 50%;
  transform: translateX(-50%);
  
}
.github a:hover{
  color:#41b883;
  background-color: rgba(255,255, 255, 0);
}
</style>
