<template>
    <header>
      <div class="logo">My Blog</div>
      <nav>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <!-- Thêm các liên kết khác của menu điều hướng -->
        </ul>
      </nav>
      <div class="user">
        <button @click="toggleUserMenu">User</button>
        <div v-if="showUserMenu" class="user-menu">
          <router-link to="/login">Login</router-link>
          <router-link to="/register">Register</router-link>
        </div>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showUserMenu: false
      };
    },
    methods: {
      toggleUserMenu() {
        this.showUserMenu = !this.showUserMenu;
      }
    }
  };
  </script>
  
  <style scoped>
  header {
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
  
  .user-menu a {
    display: block;
    color: #333;
    text-decoration: none;
  }
  
  .user-menu a:hover {
    background-color: #f4f4f4;
  }
  
  .user:hover .user-menu {
    display: block;
  }
  </style>
  