<template>
  <div class="blog_list">
    <LeftNav></LeftNav>
    <Header></Header>
    <List></List>   
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import LeftNav from "@/components/LeftNav.vue";
import List from "@/components/List.vue";
export default {
  components: {
      Header,
      LeftNav,
      Cover,
      Show,
      User,
    },
}
</script>

<style>
.main {
  position: absolute;
  bottom: 5px;
  left: 168px;
  right: 0;
  height: 100vh;
}
</style>