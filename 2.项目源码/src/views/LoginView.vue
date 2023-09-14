<template>
  <div class="login-page">
    <h2>登录</h2>
    <form @submit.prevent="login">
      <div>
        <label for="username">用户名：</label>
        <input id="username" type="text" v-model="username" />
      </div>
      <div>
        <label for="password">密&nbsp;&nbsp;&nbsp;&nbsp;码：</label>
        <input id="password" type="password" v-model="password" />
      </div>
      <button type="submit">登录</button>
    </form>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    login() {
      // 在这里处理登录逻辑
      const registeredUsername = this.$store.getters.getUsername;
      const registeredPassword = this.$store.getters.getPassword;

      if (this.username === registeredUsername && this.password === registeredPassword) {
        //将登录标识设置为true
        this.$store.dispatch('setLoggedIn', true)
        // 登录成功
        alert('登录成功!');
      } else {
        // 登录失败
        alert('登录失败！账号或用户名错误！');
      }
    },
  },
  mounted() {
    console.log(this.$store);
  },
};
</script>
<style scoped>
body {
  margin: 0;
  padding: 0;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f2f2f2;
  font-family: Arial, sans-serif;
}

.login-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  height: 71vh;
}

.login-page h2 {
  font-size: 28px;
  margin-bottom: 20px;
  margin-left: 40px;
}

.login-page form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

}

.login-page form div {
  margin-bottom: 15px;
  display: flex;
  align-items: center;
}

.login-page form label {
  font-weight: bold;
  margin-right: 10px;
}

.login-page form input {
  width: 300px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.login-page form button {
  width: 300px;
  padding: 10px;
  background-color: #4caf50;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  margin-left: 74px;
}

.login-page form button:hover {
  background-color: #45a049;
}
</style>
