<template>
  <div>
    <!-- Thêm component Header vào đây -->
    <AppHeader></AppHeader>
     
    <!-- Nội dung template của component HomePage -->
    <h1>Welcome to My Blog!</h1>
    <p>This is the homepage of our blog application.</p>
      
    <!-- Danh sách các bài viết mới nhất -->
    <PostDetail></PostDetail>
    <div></div>
  </div>
</template>

<script>
import axios from 'axios';
import AppHeader from './AppHeader.vue';
import PostDetail from './PostDetail.vue';

export default {
  name: 'HomePage',
  components: {
    AppHeader,// Đăng ký component Header để có thể sử dụng trong template của HomePage
    PostDetail 
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
