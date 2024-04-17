<template>
  <header>
    <div class="logo">My Blog</div>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/contact-us">Contact us</router-link></li>
      </ul>
    </nav>
    <div class="user">
      <button @click="toggleModal">User</button>
      <div v-if="showModal" class="modal">
        <div class="modal-content">
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
            <p>Don't have an account? <a href="javascript:void(0)" @click="toggleForm">Register now</a></p>
          </form>
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
            <p>Already have an account? <a href="javascript:void(0)" @click="toggleForm">Login</a></p>
          </form>
          <button @click="logout">Logout</button>
          <SuccessMessage v-if="showSuccessMessage" :type="message" />
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
  components: {
    SuccessMessage
  },
  data() {
    return {
      showModal: false,
      isLoginFormVisible: true,
      isRegisterFormVisible: false,
      showSuccessMessage: false,
      username: '',
      email: '',
      password: '',
      message: ''
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
      this.isLoginFormVisible = true;
      this.isRegisterFormVisible = false;
    },
    toggleForm() {
      this.isLoginFormVisible = !this.isLoginFormVisible;
      this.isRegisterFormVisible = !this.isRegisterFormVisible;
    },
    login() {
      axios.post('http://localhost:3000/api/auth/login', {
        email: this.email,
        password: this.password
      })
      .then(response => {
        this.error = '';
        const accessToken = response.data.token;
        Cookies.set('accessToken', accessToken, { expires: 7 });
        this.showSuccessMessage = true;
        this.message = 'login';
        setTimeout(() => {
          this.showSuccessMessage = false;
        }, 3000);
      })
      .catch(error => {
        console.log(error);
      });
    },
    register() {
      axios.post('http://localhost:3000/api/auth/register', {
        name: this.username,
        email: this.email,
        password: this.password
      })
      .then(response => {
        console.log('Registration successful:', response);
        this.showSuccessMessage = true;
        this.message = 'register';
        setTimeout(() => {
          this.showSuccessMessage = false;
        }, 3000);
      })
      .catch(error => {
        console.error('Registration error:', error);
      });
    },
    logout() {
      Cookies.remove('accessToken');
      this.showSuccessMessage = true;
      this.message = 'logout';
      setTimeout(() => {
        this.showSuccessMessage = false;
      }, 3000);
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

nav {
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

.modal {
  position: fixed;
  top: 90px;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
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

a {
  text-decoration: none;
  color: #fff;
}

a:hover {
  color: #ccc;
}
</style>
