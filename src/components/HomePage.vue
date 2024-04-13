<template>
  <div>
    <!-- Thêm component Header vào đây -->
    <AppHeader></AppHeader>

    <!-- Nội dung template của component HomePage -->
    <h1>Welcome to My Blog!</h1>
    <p>This is the homepage of our blog application.</p>
    
    <!-- Danh sách các bài viết mới nhất -->
    <ul>
      <li v-for="post in recentPosts" :key="post.id">
        <!-- Liên kết đến trang chi tiết của từng bài viết -->
        <router-link :to="{ name: 'PostDetail', params: { id: post.id }}"> {{ post.title }} </router-link>
      </li>
    </ul>
    <div></div>
  </div>
</template>

<script>
import axios from 'axios';
import AppHeader from './AppHeader.vue';

export default {
  name: 'HomePage',
  components: {
    AppHeader // Đăng ký component Header để có thể sử dụng trong template của HomePage
  },
  data() {
    return {
      recentPosts: [] // Danh sách các bài viết mới nhất
    };
  },
  mounted() {
    // Gửi yêu cầu GET đến API để lấy danh sách bài viết
    axios.get('http://localhost:3000/api/posts/get-posts')
      .then(response => {
        // Gán danh sách bài viết vào thuộc tính recentPosts
        this.recentPosts = response.data;
      })
      .catch(error => {
        console.error('Error fetching recent posts:', error);
      });
  }
};
</script>

<style scoped>
/* CSS styles for the homepage component */
</style>
