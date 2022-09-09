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
.blog_list{
  margin-left:168px;
}
.main{
  margin: 80px;
  padding: 10px;
}
</style>
