<template>
  <div>
    <h1>Welcome to My Blog!</h1>
    <p>This is the homepage of our blog application.</p>
    
    <!-- Danh sách các bài viết mới nhất -->
    <ul>
      <li v-for="post in recentPosts" :key="post.id">
        <!-- Liên kết đến trang chi tiết của từng bài viết -->
        <router-link :to="{ name: 'PostDetail', params: { id: post.id }}"> {{ post.title }} </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      recentPosts: [] // Danh sách các bài viết mới nhất
    };
  },
  mounted() {
    // Trong thực tế, bạn sẽ lấy danh sách các bài viết từ API hoặc cơ sở dữ liệu
    // Ở đây, tôi sẽ sử dụng một mảng mẫu để minh họa
    this.recentPosts = [
      { id: 1, title: 'Post 1' },
      { id: 2, title: 'Post 2' },
      { id: 3, title: 'Post 3' }
    ];
  }
};
</script>

<style scoped>
/* CSS styles for the homepage component */
</style>
