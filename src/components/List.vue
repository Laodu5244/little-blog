<template>
  <div class="show">
    <h2 v-if="isShow">关于{{title}}的文章</h2>
    
    <div 
      class="itembox"
      v-for="item in blogList" 
      :key="item.id" 
      :item="item" 
    >
      <div class="top">
        <h3 @click="toContent">{{ item.title | snippet }}</h3>
      </div>
      <div class="content">
        {{ item.contents | snippet2 }}
      </div>
    </div>

    <!-- 分页器 -->
    <div class="page" v-if="isShow">
      <el-button type="success" :plain="false" @click="last">上一页</el-button>
      <el-button type="success" :plain="false" @click="next">下一页</el-button>
    </div>
    <h2 v-else>暂时没有文章,去添加?</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title:'',
      page: 1,
      blogList: [],
      isShow:false
    };
  },
  created() {
    this.title = this.$route.query.cat_name
    this.getData();
  },
  filters: {
    snippet(val) {
      if (val.length > 44) {
        return val.slice(0, 44) + ". . .";
      } else {
        return val;
      }
    },
    snippet2(val) {
      if (val.length > 100) {
        return val.slice(0, 100) + ". . .";
      } else {
        return val;
      }
    },
  },
  methods: {
    // 获取网络数据
    async getData() {
      let token = localStorage.getItem('token')
      let formData = new FormData();
      formData.append("token", token);
      formData.append("cat_name", this.$route.query.cat_name);

      let res = await this.axios.post( "http://116.205.171.139:8080/get_article_list",formData)
      this.blogList = res.data;
      if(this.blogList.length !==0){
        this.isShow = true
      }

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
    // 跳转内容页
    toContent(){
      this.$router.push('/content')
    }
  },
};
</script>

<style lang="less" scoped>
.show {
  position: absolute;
  left: 0;
  right: 0;
  min-height: 100%;
  margin: 80px auto;
  border: 1px dotted #41b883;
  padding: 50px 15vw;
}
.page {
  margin-top: 30px;
  display: flex;
  justify-content: center;
}

.itembox {
  margin-bottom: 98px;
  .top {
    margin: 0 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h3 {
      font-size: 21px;
      color: orange;
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
}

h2{
  text-align: center;
  color: #41b883;
}
</style>
