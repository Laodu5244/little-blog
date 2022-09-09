<template>
  <div class="blog_list">
    <LeftNav></LeftNav>
    <Header></Header>
    <User></User> 
    <div class="main">
      <List></List>   
    </div>
    
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import LeftNav from "@/components/LeftNav.vue";
import List from "@/components/List.vue";
import User from "@/components/User.vue";
export default {
  components: {
      Header,
      LeftNav,
      List,
      User,
    },
}
</script>

<style scoped lang="less">
.main {
  position: fixed;
  left: 168px;
  right: 0;
  top: 0;
  margin-left: 168px;
  margin-bottom: 50px;
}
</style>