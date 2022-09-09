<template>
  <div class="add">
    <LeftNav></LeftNav>
    <Header></Header>
    <User></User>

    <div class="box">
      <!-- 标题 -->
      <label>标题:
        <input
          type="text"
          v-model="new_blog.title"
          class="input"
          placeholder="请输入"
        />
      </label>

      <!-- 分类 -->
      <label class="classify">分类:
        <select v-model="new_blog.classify">
          <option v-for="item in classList" :key="item.id">
            {{ item.cat_name }}
          </option>
        </select>
      </label>

      <!-- 内容 -->
      <label>内容: 
        <textarea rows="6" v-model="new_blog.content"></textarea>
      </label>

      <!-- 提交 -->
      <div class="btn">
        <el-button type="danger" @click.prevent="clear">清空内容</el-button>
        <el-button type="success" @click.prevent="add">提交博客</el-button>
      </div>

      <!-- 博客预览 -->
      <div v-show="show">
        <h3>博客预览</h3>
        <div class="itembox">
          <div class="top">
            <h3>{{ new_blog.title }}</h3>
          </div>
          <div class="content">
            {{ new_blog.content  }}
          </div>
          <div class="classify">技术种类: {{new_blog.classify}}</div>
        </div>
      </div>

    </div> 
  </div>
</template>

<script>
import LeftNav from "@/components/LeftNav.vue";
import Header from "@/components/Header.vue";
import User from "@/components/User.vue";
export default {
  components: { LeftNav, Header, User },
  data() {
    return {
      classList: [],
      new_blog: {
        title: "",
        classify: "",
        content: "",
      },
      show: false,
    };
  },
  created() {
    this.getList();
  },
  methods: {
    // 获取列表
    async getList(){
      let token = localStorage.getItem('token')
      let formData = new FormData();
      formData.append("token", token);
      let res = await this.axios.post('http://116.205.171.139:8080/get_cat',formData)
      this.classList = res.data
    },
    // 清除数据
    clear() {
      this.$confirm("此操作不可逆! 是否确定删除?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        this.new_blog.title = "";
        this.new_blog.classify = "";
        this.new_blog.content = "";
        this.$message({
          type: "success",
          showClose: true,
          message: "删除成功!",
        });
      }).catch(() =>{
        console.log('已经返回')
      })
    },
    // 添加博客
    add() {
      if (
        this.new_blog.title == "" ||
        this.new_blog.classify == "" ||
        this.new_blog.content == ""
      ) {
        this.$alert("输入不能为空", {
          confirmButtonText: "确定",
        });
        return;
      }
      // 调用添加接口
      this.get_add()
    },
    // 添加接口
    async get_add(){
      let token = localStorage.getItem('token')
      let formData = new FormData();
      formData.append("token", token);
      formData.append("cat_name", this.new_blog.classify);
      formData.append("title", this.new_blog.title);
      formData.append("contents", this.new_blog.content);
      
      let res = await this.axios.post('http://116.205.171.139:8080/add_article',formData)
      console.log(res)
      this.new_blog.title = "";
      this.new_blog.classify = "";
      this.new_blog.content = "";

      this.$router.push("/home");
      this.$message({
        type: "success",
        showClose: true,
        message: "发布成功!",
      })   
    },
  },
  // 实时预览
  updated() {
    if (
      this.new_blog.title ||
      this.new_blog.classify ||
      this.new_blog.content
    ) {
      this.show = true;
    } else {
      this.show = false;
    }
  },
};
</script>

<style scoped lang="less">
.add{
  margin-left:168px;
}
.box {
  margin: 80px;
  padding: 10px;
}
.box h3 {
  text-align: center;
  font-family: "kaiti";
  color: darkolivegreen;
  font-size: 30px;
  margin: 5px auto;
}
label {
  display: block;
  margin: 15px;
  color: darkorange;
}
select {
  height: 32px;
  margin-left: 20px;
  border: 2px solid skyblue;
  border-radius: 5px;
  width: 240px;
  outline: none;
}
textarea {
  display: block;
  width: 100%;
  padding: 8px;
  margin: 12px 0;
  border: 2px solid skyblue;
  border-radius: 5px;
  outline: none;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
}
.input {
  margin-left: 20px;
  height: 32px;
  width: 500px;
  border: 2px solid skyblue;
  border-radius: 5px;
  outline: none;
  padding: 8px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
}
.btn {
  display: flex;
  justify-content: center;
  margin: 15px 0;
}
.btn .el-button{
  margin: 20px 30px;
}

.itembox {
  margin-bottom: 98px;
  .top {
    margin: 0 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h3 {
      font-size: 23px;
      color: orangered;
      word-wrap: break-word;
      overflow: hidden;
      cursor: pointer;
    }
  }
  .content {
    padding: 10px;
    background-color: #e5e5e5;
    font-size: 14px;
    margin: 5px 0;
    width: 100%;
    overflow: hidden;
    word-wrap: break-word;
  }
  .classify{
    margin-left: 12px;
  }
}
</style>
