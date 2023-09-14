<template>
  <div class="register-page">
    <h2>注册账号</h2>
    <form @submit.prevent="register">
      <div>
        <label for="username">用户名：</label>
        <input id="username" type="text" v-model="username" />
      </div>
      <div>
        <label for="password">密&nbsp;&nbsp;&nbsp;&nbsp;码：</label>
        <input id="password" type="password" v-model="password" />
      </div>
      <button type="submit">注册</button>
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
    register() {
      // 在这里处理注册逻辑
      this.$store.dispatch('setUsername', this.username);
      this.$store.dispatch('setPassword', this.password);
      // 进行其他注册逻辑
      alert('注册成功！')
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

.register-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  height: 71vh;
}

.register-page h2 {
  font-size: 28px;
  margin-bottom: 20px;
  margin-left: 40px;
}

.register-page form div {
  margin-bottom: 15px;
}

.register-page form label {
  font-weight: bold;
}

.register-page form input {
  width: 300px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.register-page form button {
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

.register-page form button:hover {
  background-color: #45a049;
}
</style>
<!-- 
<style>
.register-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f2f2f2;
  font-family: Arial, sans-serif;
}

.register-page h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

.register-page form {
  width: 300px;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.register-page form div {
  margin-bottom: 15px;
}

.register-page form label {
  font-weight: bold;
}

.register-page form input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.register-page form button {
  width: 100%;
  padding: 10px;
  background-color: #4caf50;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
}

.register-page form button:hover {
  background-color: #45a049;
}
</style> -->