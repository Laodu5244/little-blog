<template>
  <div class="show">
    <Blog v-for="item in blogList" :key="item.id" :item="item" />

    <div class="page">
      <el-button type="success" :plain="false" @click="last">上一页</el-button>
      <el-button type="success" :plain="false" @click="next">下一页</el-button>
    </div>
  </div>
</template>

<script>
import Blog from "@/components/Blog.vue";
export default {
  components: { Blog },
  data() {
    return {
      page: 1,
      blogList: []
    };
  },
  created() {
    this.show = true;
    this.getData();
  },
  methods: {
    // 获取网络数据
    getData() {
      this.axios({
        url: "https://ku.qingnian8.com/dataApi/blog/showBlog.php",
        params: {
          page: this.page,
          num: 12,
        },
      }).then((res) => {
        this.blogList = res.data;
        this.show = false;
      });
    },
    // 点击上一页
    last() {
      if (this.page > 1) {
        this.page--;
      } else {
        this.$message({
          message: "已经是第一页了",
          type: "warning",
          center: true,
          plain: true,
        });
        return;
      }
      this.show = true;
      this.getData();
      setTimeout(() => {
        window.scrollTo({
          top: document.body.clientHeight,
          // 滚动效果
          behavior: "smooth"
        })
      }, 200);
    },
    // 点击下一页
    next() {
      if (this.blogList.length == 12) {
        this.page++;
      } else {
        this.$message({
          message: "已经是第最后一页了",
          type: "warning",
          center: true,
          plain: true,
        });
        return;
      }
      this.show = true;
      this.getData();
      setTimeout(() => {
        window.scrollTo({
          top: document.body.clientHeight,
          // 滚动效果
          behavior: "smooth"
        })
      }, 200);
    },
  },
};
</script>

<style lang="less" scoped>
.show {
  position: absolute;
  left: 0;
  right: 0;
  margin: 80px auto;
  border: 1px dotted #41b883;
  padding: 50px 15vw;
}
.page {
  margin-top: 30px;
  display: flex;
  justify-content: center;
}
</style>
