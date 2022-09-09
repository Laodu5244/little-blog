<template>
  <div class="add">
    <LeftNav></LeftNav>
    <Header></Header>
    <User></User>
    <div class="box">
      <label>标题:
        <input
          type="text"
          v-model="item.title"
          class="input"
          placeholder="请输入"
        />
      </label>

      <label class="classify">
        分类:
        <select v-model="item.classify">
          <option v-for="item in classList" :key="item.id">
            {{ item.cat_name }}
          </option>
        </select>
      </label>

      <label
        >内容: <textarea rows="6" v-model="item.content"></textarea>
      </label>
      <div class="btn">
        <el-button type="danger" @click.prevent="clear">清空内容</el-button>
        <el-button type="success" @click.prevent="add">提交博客</el-button>
      </div>
      <div v-show="show">
        <h3>博客预览</h3>
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
      item: {
        title: "",
        posttime: Date.now() / 1000,
        author: "",
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
        this.item.title = "";
        this.item.author = "";
        this.item.classify = "";
        this.item.content = "";
        this.$message({
          type: "success",
          showClose: true,
          message: "删除成功!",
        });
      });
    },
    // 添加博客
    add() {
      if (
        this.item.title == "" ||
        this.item.author == "" ||
        this.item.classify == "" ||
        this.item.content == ""
      ) {
        this.$alert("输入不能为空", {
          confirmButtonText: "确定",
        });
        return;
      }
      this.axios({
        url: "https://ku.qingnian8.com/dataApi/blog/addBlog.php",
        params: this.item,
      }).then((res) => {
        console.log(res);
        this.item.title = "";
        this.item.author = "";
        this.item.classify = "";
        this.item.content = "";
      });
      this.$router.push("/home");
      this.$message({
        type: "success",
        showClose: true,
        message: "发布成功!",
      });
    },
  },
  updated() {
    if (
      this.item.title ||
      this.item.author ||
      this.item.classify ||
      this.item.content
    ) {
      this.show = true;
    } else {
      this.show = false;
    }
  },
};
</script>

<style scoped lang="less">
.box {
  position: fixed;
  left: 168px;
  right: 0;
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
</style>
