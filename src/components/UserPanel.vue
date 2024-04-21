<template>
  <div class="user-panel" v-if="user">
    <img v-if="user.avatar" :src="user.avatar" alt="Avatar">
    <span>{{ user.name }}</span>
  </div>
</template>

<script>
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import Cookies from 'js-cookie';

export default {
  name: 'UserPanel',
  props: {
    accessToken: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      user: null 
    };
  },
  mounted() {
     try {
      const accessToken = Cookies.get('accessToken');  

      const decodeToken  = jwtDecode(accessToken)   
      const id  = decodeToken.userId
      this.fetchUserData(id) 
     } catch (error) {
        console.log(error);
     }
  },
  methods: {
    async fetchUserData(id) {
      const accessToken = Cookies.get('accessToken');

// Kiểm tra nếu accessToken tồn tại
if (accessToken) {
    // Gửi yêu cầu GET đến API để lấy danh sách bài viết
    await axios.get(`http://localhost:3000/api/users/${id}`, {
        headers: {
            Authorization: `Bearer ${accessToken}` // Thêm accessToken vào tiêu đề yêu cầu
        }
    })
    .then(response => {
        // Gán danh sách bài viết từ response vào mảng posts
        this.user = response.data;
    })
    .catch(error => {
        console.error('Error fetching posts:', error);
    });
} else {
    console.error('No accessToken found in cookie');
}
    }
  }
};
</script>

<style scoped>
.user-panel {
  display: flex;
  align-items: center;
}

img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
}
</style>
