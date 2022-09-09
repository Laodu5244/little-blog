<template>
  <div class="login">
    <div class="container">
      <div class="panda">
        <div class="ear left"></div>
        <div class="ear right"></div>
        <div class="face">
          <div class="eye-shadow left"></div>
          <div class="eye-white left">
            <div class="eye-ball" ref="eye1"></div>
          </div>
          <div class="eye-shadow right"></div>
          <div class="eye-white right">
            <div class="eye-ball" ref="eye2"></div>
          </div>
          <div class="nose"></div>
          <div class="mouth"></div>
        </div>
        <div class="body"></div>
        <div class="foot left">
          <div class="sole"></div>
        </div>
        <div class="foot right">
          <div class="sole"></div>
        </div>
      </div>
      <div class="login-box" ref="login_box">
        <div class="hand left"></div>
        <div class="hand right"></div>
        <h1>注 册</h1>
        <div class="ipt-box">
          <input 
          @click="click_user"
          type="text" 
          v-model="user.username" />
          <label>用户名</label>
        </div>
        <div class="ipt-box">
          <input 
          type="password" 
          @click="click_pass"
          v-model="user.password"/>
          <label>密码</label>
        </div>
        <button @click="toHome">注册</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  mounted(){
    this.eye_move()
  },
  beforeDestroy(){
    document.onmousemove = null
  },
  methods: {
    eye_move(){
      this.$refs.eye1.style.left = 8 + 'px'
      this.$refs.eye1.style.top = 8 + 'px'
      this.$refs.eye2.style.left = 8 + 'px'
      this.$refs.eye2.style.top = 8 + 'px'
      document.onmousemove = (e)=>{
        var x = e.clientX / 80
        var y = e.clientY / 40
        this.$refs.eye1.style.left = x + 'px'
        this.$refs.eye1.style.top = y + 'px'
        this.$refs.eye2.style.left = x + 'px'
        this.$refs.eye2.style.top = y + 'px'
      }
    },
    click_user(){
      this.$refs.login_box.classList.remove('up')
    },
    click_pass(){
      this.$refs.login_box.classList.add('up')
    },
    toHome() {
      if (this.user.username.length < 4 || this.user.username.length > 18) {
        this.$message({
          message: "用户名在4~18位之间",
          type: "warning",
          center: true,
          plain: true,
        });
      } else if (
        this.user.password.length < 4 ||
        this.user.password.length > 18
      ) {
        this.$message({
          message: "密码在4~18位之间",
          type: "warning",
          center: true,
          plain: true,
        });
      } else {
        let formData = new FormData();
        formData.append("username", this.user.username);
        formData.append("password", this.user.password);

        axios
          .post("http://116.205.171.139:8080/register", formData)
          .then((res) => {
            if (res.data.code == -1) {
              this.$message({
                type: "success",
                showClose: true,
                message: "用户已经存在,请重新注册",
              });
            } else {
              this.$message({
                type: "success",
                showClose: true,
                message: "注册成功了,现在可以登录了",
              });
              this.$router.push("/");
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
};
</script>

<style scoped>
.login {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(150deg, rgb(147, 147, 6), #db1208);
}

/* 开始画熊猫 */
.panda {
  position: relative;
  width: 200px;
}

/* 脸部 */
.face {
  width: 200px;
  height: 200px;
  background-color: #fff;
  border-radius: 100%;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.15);
  position: relative;
  z-index: 1;
}

/* 耳朵 */
.ear {
  width: 70px;
  height: 70px;
  background-color: #000;
  border-radius: 100%;
  position: absolute;
  top: -10px;
}

.ear.right {
  right: 0;
}

/* 黑眼圈 */
.eye-shadow {
  width: 50px;
  height: 80px;
  background-color: #000;
  border-radius: 50%;
  position: absolute;
  top: 40px;
}

.eye-shadow.left {
  transform: rotate(45deg);
  left: 30px;
}

.eye-shadow.right {
  transform: rotate(-45deg);
  right: 30px;
}

/* 眼白 */
.eye-white {
  width: 30px;
  height: 30px;
  background-color: #fff;
  border-radius: 100%;
  position: absolute;
  top: 68px;
}

.eye-white.left {
  left: 38px;
}

.eye-white.right {
  right: 38px;
}

/* 眼球 */
.eye-ball {
  width: 20px;
  height: 20px;
  background-color: #000;
  border-radius: 100%;
  position: absolute;
  transform: translate(-5px, -5px);
  left: 5px;
  top: 5px;
}

/* 鼻子 */
.nose {
  width: 35px;
  height: 20px;
  background-color: #000;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  bottom: 65px;
  border-radius: 42px 42px 60px 60px / 30px 30px 60px 60px;
}

/* 嘴巴 */
.mouth {
  width: 68px;
  height: 25px;
  border-bottom: 7px solid #000;
  border-radius: 50%;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  bottom: 35px;
}

/* 身体 */
.body {
  width: 250px;
  height: 280px;
  background-color: #fff;
  position: relative;
  left: -25px;
  top: -10px;
  border-radius: 100px 100px 100px 100px / 126px 126px 96px 96px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
}

/* 脚 */
.foot {
  width: 82px;
  height: 120px;
  background-color: #000;
  position: absolute;
  bottom: 8px;
  z-index: 3;
  border-radius: 40px 40px 35px 40px / 26px 26px 63px 63px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
}

.foot.left {
  left: -80px;
}

.foot.right {
  right: -80px;
  transform: rotateY(180deg);
}

/* 脚掌-大椭圆 */
.foot::after {
  content: "";
  width: 55px;
  height: 65px;
  background-color: #222;
  position: absolute;
  border-radius: 50%;
  left: 0;
  right: 0;
  margin: auto;
  bottom: 10px;
}

/* 脚掌-三个小椭圆 */
.foot .sole,
.foot .sole::before,
.foot .sole::after {
  width: 20px;
  height: 30px;
  background-color: #222;
  position: absolute;
  border-radius: 50%;
  left: 0;
  right: 0;
  margin: auto;
  top: 8px;
}

.foot .sole::before {
  content: "";
  left: -50px;
}

.foot .sole::after {
  content: "";
  left: 25px;
}

/* 手 */
.hand,
.hand::before,
.hand::after {
  width: 40px;
  height: 30px;
  background-color: #000;
  border-radius: 50px;
  position: absolute;
  top: 70px;
  left: -20px;
}

.hand::before {
  content: "";
  top: 16px;
  left: 0;
}

.hand::after {
  content: "";
  top: 32px;
  left: 0;
}

.hand.right {
  right: -20px;
  left: auto;
}

/* 登录框 */
.login-box {
  width: 400px;
  height: 300px;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -110px);
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: 0.3s;
}

h1 {
  color: darkorange;
  font-weight: normal;
  margin-bottom: 5px;
}

.ipt-box {
  width: 80%;
  margin-top: 25px;
  position: relative;
}

.ipt-box input {
  width: 100%;
  height: 35px;
  border: none;
  border-bottom: 1px solid #bbb;
  text-indent: 5px;
  outline: none;
  transition: 0.3s;
  color:#555;
}

.ipt-box label {
  position: absolute;
  left: 5px;
  top: 5px;
  font-size: 14px;
  color: #555;
  transition: 0.3s;
  pointer-events: none;
}

.ipt-box input:focus{
  border-color: darkorange;
  box-shadow: 0 1px darkorange;
}

.ipt-box input:focus ~ label,
.ipt-box input:valid ~ label {
  color: darkorange;
  transform: translateY(-15px);
}

button {
  width: 150px;
  height: 40px;
  background-color: darkorange;
  border: none;
  border-radius: 3px;
  margin-top: 30px;
  color: #fff;
  letter-spacing: 10px;
  text-indent: 10px;
  cursor: pointer;
  transition: 0.3s;
  font-weight: bold;
}

button:hover {
  letter-spacing: 25px;
  text-indent: 25px;
  background-color: orange;
}

/* 登录框向上举 */
.up {
  transform: translate(-50%, -180px);
}
</style>