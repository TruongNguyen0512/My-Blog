import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/HomePage.vue';
import PostDetail from '@/components/PostDetail.vue'; // Import component PostDetail

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/post/:id', // Định nghĩa một tham số động ":id" để truyền vào id của bài viết
    name: 'PostDetail', // Tên của route
    component: PostDetail // Component cho trang chi tiết bài viết
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;