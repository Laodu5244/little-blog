<template>
  <div class="content">
    <LeftNav></LeftNav>
    <Header></Header>
    <User></User> 

    <div class="itembox">
      <h1 class="top">{{ blog.title }}</h1>
      <div class="content">
        {{ blog.contents }}
      </div>
      <div class="classify">技术种类: 
        <span>{{blog.classify}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import LeftNav from "@/components/LeftNav.vue";
import Header from "@/components/Header.vue";
import User from "@/components/User.vue";

export default {
  components:{
    LeftNav,
    Header,
    User
  },
  data(){
    return{
      blog:{
        title:'',
        contents:'',
        classify:''
      }
    }
  },
  created(){
    this.getData()
  },
  methods:{
    async getData(){
      let token = localStorage.getItem('token')
      let id = this.$route.query.id      
      let formData = new FormData();
      formData.append("token", token);
      formData.append("article_id", id);
      let res = await this.axios.post('http://116.205.171.139:8080/get_article_one',formData)
      this.blog = res.data
      this.blog.classify = this.$store.state._params || 'PHP'
    }
  }
}
</script>

<style scoped lang='less'>
.content {
  margin-left:168px;
  padding: 10px;
  padding-top: 80px;
  margin-bottom: 50px;
}

.itembox {
  margin: 0 84px;
  .top {
    margin: 32px;
    font-size: 32px;
    color: orange;
    text-align: center;
    overflow: hidden;
    word-wrap: break-word;
  }
  .content {
    padding: 15px;
    background-color: rgba(112, 238, 194,0.2);
    border-radius: 10px;
    font-size: 16px;
    margin: 5px 0;
    width: 100%;
    overflow: hidden;
    word-wrap: break-word;
    letter-spacing: 1.5px;
    text-indent:2em;
    line-height: 24px;
    color: #555;
  }
  .classify{
    letter-spacing: 1.5px;
    font-size: 14px;
    margin-left: 12px;
    color: #666;
    span{
      color: #41b883;
    }
  }
}

</style>
