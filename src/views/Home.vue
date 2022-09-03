<template>
  <div class="home">
    <Cover></Cover>
    <LeftNav></LeftNav>
    <div class="main">
      <Header></Header>
      <Show></Show>
    </div>
    <!-- user -->
    <div class="user" @click='toLogin'>{{user}}</div>
  </div>
</template>

<script>
import Cover from "@/components/Cover.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import LeftNav from "@/components/LeftNav.vue";
import Show from "@/components/Show.vue";

export default {
  components: {
    Header,
    Footer,
    LeftNav,
    Cover,
    Show,
  },
  data(){
    return {
      user:'admin'
    }
  },
  mounted(){
    this.bus.$on('uuu',(res)=>{
      this.user = res
    })
  },
  methods:{
    toLogin(){
      this.$confirm("返回登录页?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        this.$message({
          type: "success",
          showClose: true,
          message: "已经成功跳转",
        });
        this.$router.push('/')
      }).catch((err) =>{
        console.log(err)
      })
    }
  }
};
</script>

<style scoped lang="less">
.home {
  position: relative;
}
.main {
  position: absolute;
  bottom: 5px;
  left: 168px;
  right: 0;
}
.user{
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: rgba(17, 157, 26,0.3);
  color: #fff;
  padding: 12px;
  padding-top: 5px;
  font-size: 24px;
  z-index: 123;
  border-radius:25px;
  cursor: pointer;
}
.user:hover{
  background-color: rgba(17, 157, 26,0.8);
}
</style>
