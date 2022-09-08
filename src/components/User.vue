<template>
  <div class="user" @click='toLogin'>
    {{username}}
  </div>
</template>

<script>
export default {
  computed:{
    username(){
      return this.$store.state._user
    }
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
}
</script>

<style scoped>
.user{
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: rgba(237, 153, 8, 0.5);
  color: #fff;
  padding: 12px;
  padding-top: 5px;
  font-size: 24px;
  z-index:99999;
  border-radius:25px;
  cursor: pointer;
}
.user:hover{
  background-color: rgba(237, 153, 8, 0.8);
}
</style>