<template>
  <div>
    <!-- Thêm component Header vào đây -->
    <AppHeader></AppHeader>
  <div class ="nav_body">
      <div class="nav_body_left">
         <SideBar></SideBar>
      </div>
    <!-- Nội dung template của component HomePage -->
    <div class="nav_body_right">
      <div class="introduce">
          <h1>Welcome to My Blog!</h1>
          <p>This is the homepage of our blog application.</p>
      </div>
      <!-- Danh sách các bài viết mới nhất -->
      <PostDetail></PostDetail>
    </div>
  </div>
  </div>
</template>

<script>
import axios from 'axios';
import AppHeader from './AppHeader.vue';
import PostDetail from './PostDetail.vue'; 
import SideBar from './SideBar.vue';

export default {
  name: 'HomePage',

  components: {
    AppHeader,// Đăng ký component Header để có thể sử dụng trong template của HomePage
    PostDetail ,
    SideBar
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
.introduce {
    text-align: center;
}
.introduce h1,
.introduce p {
    margin: 0; /* Đảm bảo không có khoảng cách giữa các phần tử */
}

.nav_body{
  display : flex ; 
}
.nav_body_left{

}

.nav_body_right {
  width: 1270px;
}

</style>
