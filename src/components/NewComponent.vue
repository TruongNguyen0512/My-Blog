<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div>
        <label for="email">email:</label>
        <input type="text" id="email" v-model="email" required>
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <button type="submit">Login</button>
    </form>
    <p v-if="error" style="color: red;">{{ error }}</p>
  </div>
</template>

<script>
import Cookies from 'js-cookie';
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: '',
      error: ''
    };
  },
  methods: {
    login() {
      axios.post('http://localhost:3000/api/auth/login', {
        email: this.email,
        password: this.password
      })
      .then(response => {
        // Xóa thông báo lỗi nếu có
        this.error = '';

        const accessToken = response.data.token;
        // Lưu token vào Cookies Storage
        Cookies.set('accessToken', accessToken, { expires: 7 });

        console.log(response)

        // Xử lý phản hồi từ API ở đây, chẳng hạn chuyển hướng đến trang dashboard
        // Nếu đăng nhập thành công        
      })
      .catch(error => {
        // Xử lý lỗi từ API
        // this.error = error.response.data.message;
        console.log(error)
      });
    }
  }
};

</script>

<style scoped>
/* CSS styles for the login form */
</style>
