<template>
  <div class="about">
    <LeftNav></LeftNav>
    <Footer></Footer>
    <!-- user -->
    <User></User>

    <div class="box">
      <img src="@/assets/images/main.svg">
      <div class="info">
        <h3>关于本博客:</h3>
        <ul>
          <li>后端作者：章鱼</li>
          <li>前端作者：东子</li>
          <li>代码敲烂，薪资过万！</li>
        </ul>
      </div>
    </div>
    
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
  display:flex;
  justify-content: space-around;
  align-items: center;
  img{
    width:400px;
    height: 400px;
    display: block;
  }
}

.info{
  width:400px;
  height: 400px;
  opacity: 0.8;
  padding: 50px;
  color:aliceblue;
  h3{
    font-size: 26px;
    font-family: 'kaiti';
    letter-spacing: 2px;
    margin-left: -15px;
  }
  ul{
    li{
      font-family: 'kaiti';
      margin: 20px 0;
      padding-left: 5px;
      list-style-type: circle;
      line-height: 30px;
      font-size: 20px;
    }
  }
}

</style>
