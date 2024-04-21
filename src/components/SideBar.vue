<template>
  <div class="sidebar">
    <ul>
      <MenuItem :isActive="activeItem === 'dashboard'" @toggle-active="toggleDashboard">Dashboard</MenuItem>
      <li v-show="showDashboardOptions">Dashboard Options</li> <!-- Hiển thị tùy chọn Dashboard khi active -->
      <MenuItem :isActive="activeItem === 'profile'" @toggle-active="toggleProfile">Profile</MenuItem>
      <li v-show="showProfileInfo">Profile Information</li> <!-- Hiển thị thông tin Profile khi active -->
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
  },
  data() {
    return {
      showDashboardOptions: false,
      showProfileInfo: false
    };
  },
  methods: {
    toggleDashboard() {
      this.showDashboardOptions = !this.showDashboardOptions; // Đảo ngược trạng thái hiển thị Dashboard Options
    },
    toggleProfile() {
      this.showProfileInfo = !this.showProfileInfo; // Đảo ngược trạng thái hiển thị Profile Information
    }
  }
};
</script>

<style scoped>
.sidebar {
  height :100%  ; 
  width: 200px;
  background-color: #f0f0f0;
  padding: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}
</style>
