<template>
  <div class="left-nav">
    <img src="@/assets/images/logo.svg" @click="toAbout"/>

    <div class="container">
      <router-link 
        :to="item.path" 
        exact 
        v-for="item in nav_list" 
        :key="item.id"
      > <i :class="item.icon"></i>
        <div>{{item.name}}</div>
      </router-link>
    </div>

    <div class="github">
      <a href="https://github.com/Laodu5244">Github</a>
    </div>
  </div>
</template> 

<script>
export default {
  data(){
    return{
      nav_list:[
        { id:1,name:'主页',path:'/home',icon:'el-icon-notebook-1' },
        { id:2,name:'分类',path:'/classify',icon:'el-icon-tickets' }, 
        { id:3,name:'博客',path:'/blog',icon:'el-icon-reading' },
        { id:4,name:'添加',path:'/add',icon:'el-icon-edit-outline' },
        { id:5,name:'关于',path:'/about',icon:'el-icon-s-custom' },
      ]
    }
  },
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
