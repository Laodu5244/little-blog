<template>
  <div class="content">
    <LeftNav></LeftNav>
    <Header></Header>
    <main><h3>123</h3></main>
  </div>
</template>

<script>
import LeftNav from "@/components/LeftNav.vue";
import Header from "@/components/Header.vue";
export default {
  components:{
    LeftNav,
    Header
  }
}
</script>

<style scoped>
.content {
  position: fixed;
  left: 168px;
  right: 0;
  padding: 10px;
  padding-top: 80px;
  margin-bottom: 50px;
}
.main {
  position: fixed;
  left: 168px;
  right: 0;
  margin: 0 auto;
  padding: 10px;
  margin-bottom: 50px;
}
</style>
