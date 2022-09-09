<template>
  <div class="classify">
    <LeftNav></LeftNav>
    <h3>{{title}}</h3>
    <div class="main">
      <el-button 
      class="item-class"
        type="success"  
        @click="toBlog(item.cat_name)"
        v-for="item in list"
        :key="item.id"
      >{{item.cat_name}}</el-button>
    </div>

    <!-- 添加 -->
    <el-button 
      class="add" 
      icon="el-icon-edit" 
      type="text"
      @click="open"
    >添加新分类</el-button>
    <!-- user -->
    <User></User>
  </div>
</template>

<script>
import LeftNav from '@/components/LeftNav.vue'
import User from '@/components/User.vue'
export default {
  components: { LeftNav, User },
  data(){
    return{
      title:"分类索引",
      list:[]
    }
  },
  created(){
    this.getList()
  },
  methods:{
    // 跳转博客列表
    toBlog(cat){
      // 获取点击的分支,存入vuex
      this.$store.commit('param',cat)
      // 跳转到博客页
      this.$router.push('/blog')
    },
    // 获取列表
    async getList(){
      let token = localStorage.getItem('token')
      let formData = new FormData();
      formData.append("token", token);
      let res = await this.axios.post('http://116.205.171.139:8080/get_cat',formData)
      this.list = res.data
    },
    // 添加新分支
    open(){
      this.$prompt('请输入新分支', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
      }).then(({ value }) => {
        if(value.trim() == ''){
          this.$message({
            type: 'info',
            message: '输入不能为空'
          });
        }else{
          // 调用后台接口添加
          let token = localStorage.getItem('token')
          let formData = new FormData();
          formData.append("token", token);
          formData.append("cat_name", value);
          this.axios.post('http://116.205.171.139:8080/add_cat',formData)

          setTimeout(()=>{ this.getList() })  
          this.$message({
            type: 'success',
            message: '新分支是: ' + value
          })  
        }
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消输入'
        });       
      });
    },
  }
}
</script>

<style scoped>
.classify{
  margin-left: 168px;
}
h3{
  margin: 30px;
  text-align: center;
  color:#333;
  font-size: 45px;
  font-family: '楷体';
  letter-spacing: 15px;
}
.main{
  display: flex;
  flex-direction: column; 
  justify-content:center;
  align-items: center;
}
.item-class{
  margin: 5px;
  width:150px;
  font-size: 20px;
}
.add{
  position:absolute;
  top: 20px;
  left: 185px;
  margin: 5px;
  font-size: 16px;

}
</style>
