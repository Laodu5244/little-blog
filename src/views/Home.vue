<template>
  <div class="home">
    <LeftNav></LeftNav>
    <Cover></Cover>
    <User></User>
  </div>
</template>

<script>
import LeftNav from "@/components/LeftNav.vue";
import Cover from "@/components/Cover.vue";
import User from "@/components/User.vue";

export default {
  components: {
    LeftNav,
    Cover,
    User,
  },
};
</script>

<style scoped>
.home {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
</style>
