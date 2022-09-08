<template>
  <div class="about">
    <LeftNav></LeftNav>
    <div class="box">
      <img src="@/assets/images/main.svg">
    </div>
    <Footer></Footer>
    <!-- user -->
    <User></User>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import LeftNav from '@/components/LeftNav.vue'
import User from '@/components/User.vue'
export default {
  components: { Footer,LeftNav ,User},

}
</script>

<style scoped lang="less">
.box{
  position: fixed;
  top:0;
  left: 168px;
  bottom:64px;
  right:0;
  background-color: rgb(102, 87, 199);
  img{
    width:40vw;
    margin: 100px auto;
    display: block;
  }
}

</style>
