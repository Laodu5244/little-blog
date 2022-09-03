<template>
  <div class="cover">
    <img src="@/assets/images/cover.jpg">
    <h1>{{title}}</h1>
  </div>
</template>

<script>
export default {
  data(){
    return{
      title: '',
      num: 1,
      timer:null
    }
  },
  methods:{
    writeText(){
      let text = "千里之行，始于足下！"
      this.title = text.slice(0,this.num)
      this.num++
      if(this.num>text.length) this.num = 0
    }
  },
  mounted(){
    this.timer = setInterval(()=>{
      this.writeText()
    },500)
  },
  beforeDestroy(){
    clearInterval(this.timer)
  }
}
</script>

<style scoped>
.cover{
  overflow: hidden;
}
img{
  width:100vw;
  height: 100vh;
}
h1{
  position:absolute;
  top:30%;
  left:40%;
  font-size: 4vw;
  color:rgb(237, 234, 232);
}
</style>
