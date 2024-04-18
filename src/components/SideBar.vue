<template>
    <div class="sidebar">
      <ul>
        <MenuItem :isActive="activeItem === 'dashboard'">Dashboard</MenuItem>
        <MenuItem :isActive="activeItem === 'profile'">Profile</MenuItem>
        <!-- Thêm các MenuItem khác nếu cần -->
      </ul>
      <UserPanel :user="user" />
    </div>
  </template>
  
  <script>
  import MenuItem from './MenuItem.vue';
  import UserPanel from './UserPanel.vue';
  
  export default {
    name: 'SideBar',
    components: {
      MenuItem,
      UserPanel
    },
    props: {
      user: {
        type: Object,
        required: true
      },
      activeItem: {
        type: String,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  .sidebar {
    width: 200px;
    background-color: #f0f0f0;
    padding: 20px;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  </style>
  