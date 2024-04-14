<template>
    <header>
    <div class="logo">My Blog</div>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/contact-us">Contact us</router-link></li>
        <!-- Thêm các liên kết khác của menu điều hướng -->
      </ul>
    </nav>
    <div class="user">
      <button @click="toggleModal">User</button>
      <!-- Sử dụng modal -->
      <div v-if="showModal" class="modal">
        <div class="modal-content">
          <!-- Form đăng nhập -->
          <form v-if="isLoginFormVisible" @submit.prevent="login">
            <h2>Login</h2>
            <div>
              <label for="login-email">Email:</label>
              <input type="text" id="login-email" v-model="email" required>
            </div>
            <div>
              <label for="login-password">Password:</label>
              <input type="password" id="login-password" v-model="password" required>
            </div>
            <button type="submit">Login</button>
            <p>Don't have an account? <a  href="#" @click="toggleForm">Register now</a></p>
          </form>
          <!-- Form đăng ký -->
          <form v-if="isRegisterFormVisible" @submit.prevent="register">
            <h2>Register</h2>
            <div>
              <label for="register-username">Username:</label>
              <input type="text" id="register-username" v-model="username" required>
            </div>
            <div>
              <label for="register-email">Email:</label>
              <input type="text" id="register-email" v-model="email" required>
            </div>
            <div>
              <label for="register-password">Password:</label>
              <input type="password" id="register-password" v-model="password" required>
            </div>
            <button type="submit">Register</button>
            <p>Already have an account? <a href="#" @click="toggleForm">Login</a></p>
          </form>
          <SuccessMessage v-if="showSuccessMessage" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Cookies from 'js-cookie';
import axios from 'axios';
import SuccessMessage from './SucessMessage.vue';
export default {
  components : {
    SuccessMessage  
  } , 
  data() {
    return {
      showModal: false,
      isLoginFormVisible: true,
      isRegisterFormVisible: false,
      showSuccessMessage: false, 
      username: '',
      email: '',
      password: '' 
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
      // Mặc định hiển thị form đăng nhập khi mở modal
      this.isLoginFormVisible = true;
      // Ẩn form đăng ký khi mở modal
      this.isRegisterFormVisible = false;
    },
    toggleForm() {
      // Chuyển đổi giữa form đăng nhập và form đăng ký
      this.isLoginFormVisible = !this.isLoginFormVisible;
      this.isRegisterFormVisible = !this.isRegisterFormVisible;
    },
    login() {
      // Xử lý đăng nhập ở đây
      // Sau khi đăng nhập thành công, có thể chuyển hướng người dùng đến trang khác
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
     
        this.showSuccessMessage = true;  
        setTimeout(()=>{
          this.showSuccessMessage = false 
        },3000)

      })
      .catch(error => {
        // Xử lý lỗi từ API
        // this.error = error.response.data.message;
        console.log(error) 
        
      });
    },
    register() {
      // Xử lý đăng ký ở đây
      // Sau khi đăng ký thành công, có thể chuyển hướng người  dùng đến trang khác
            // Gửi yêu cầu POST đến API để đăng ký người dùng
       axios.post('http://localhost:3000/api/auth/register', {
        name: this.username,
        email: this.email,
        password: this.password
      })
      .then(response => {
        // Xử lý phản hồi từ API ở đây
        console.log('Registration successful:', response);
        // Sau khi đăng ký thành công, có thể thực hiện các hành động khác như chuyển hướng người dùng đến trang khác
        this.showSuccessMessage = true;  
        setTimeout(()=>{
          this.showSuccessMessage = false 
        },3000)
      })
      .catch(error => {
        // Xử lý lỗi từ API
        console.error('Registration error:', error);
      });
    }
  }
};
</script>

<style scoped>
header {
  height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #333;
    color: #fff;
}



.logo {
  font-size: 1.5rem;
}

nav{
      /* margin: 0px; */
      position: absolute;
    left: 100px;
}

nav ul {
  list-style: none;
  display: flex;
}

nav ul li {
  margin-right: 1rem;
}

.user-menu {
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 0.5rem;
  display: none;
}

.modal {
  position: fixed;
  top: 90px;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Mờ đen */
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content[data-v-bb50a5e4] {
  height: 305px;
    width: 510px;
    background-color: #543c3c;
    padding: 1rem;
    border-radius: 8px;
    position: absolute;
    top: 30px;
}

.modal form {
  margin-bottom: 1rem;
}

.modal form div {
  margin-bottom: 0.5rem;
}

.modal form label {
  display: block;
  margin-bottom: 0.25rem;
}

.modal form input {
  width: 100%;
  
    height: 29px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

h2 {
    display: block;
    font-size: 1.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    unicode-bidi: isolate;
}
a{
  text-decoration: none ;
  color: #fff; /* Màu chữ sáng */
}
a:hover {
  color: #ccc; /* Màu chữ thay đổi khi di chuột qua */
}

</style>
