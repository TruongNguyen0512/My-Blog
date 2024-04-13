import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/HomePage.vue';
import PostDetail from '@/components/PostDetail.vue'; // Import component PostDetail
import NewComponent from '@/components/NewComponent.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/posts/get-posts/:postid', // Định nghĩa một tham số động ":id" để truyền vào id của bài viết
    name: 'PostDetail', // Tên của route
    component: PostDetail // Component cho trang chi tiết bài viết
  },
  {
    path : '/login',
    name : 'NewComponent' , 
    component : NewComponent 
  }

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
