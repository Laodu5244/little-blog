<template>
  <div class="classify">
    <LeftNav></LeftNav>
    <h3>技术栈</h3>
    <div class="main">
      <el-button type="success" icon="el-icon-collection-tag" @click="toHome">HTML+Css</el-button>
      <el-button type="success" icon="el-icon-collection-tag" @click="toHome">JavaScript</el-button>
      <el-button type="success" icon="el-icon-collection-tag" @click="toHome">jQuery</el-button>
      <el-button type="success" icon="el-icon-collection-tag" @click="toHome">NodeJS</el-button>
      <el-button type="success" icon="el-icon-collection-tag" @click="toHome">webpack</el-button>
      <el-button type="success" icon="el-icon-collection-tag" @click="toHome">微信小程序</el-button>
      <el-button type="success" icon="el-icon-collection-tag" @click="toHome">VueJS</el-button>
    </div>
  </div>
</template>

<script>
import LeftNav from '@/components/LeftNav.vue'
import Footer from '@/components/Footer.vue'
export default {
  components: { LeftNav, Footer },
  methods:{
    toHome(){
      this.$router.push('/home')
      setTimeout(() => {
        window.scrollTo({
          top: document.body.clientHeight,
          // 滚动效果
          behavior: "smooth"
        })
      }, 200);
    }
  }
}
</script>

<style scoped>
.classify{
  margin-left: 168px;
}
h3{
  margin: 30px auto;
  padding-left: 6vw;
  width:25vw;
  color:#333;
  font-size: 4.5vw;
  font-family: '楷体';
}
.main{
  display: flex;
  flex-direction: column;
  justify-content:center;
  /* align-items: center; */
  margin: 64px auto;
  width:20vw;
}
.el-button{
  margin: 5px;
}
</style>
