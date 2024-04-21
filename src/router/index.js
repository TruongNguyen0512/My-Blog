import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/HomePage.vue';
import PostDetail from '@/components/PostDetail.vue'; // Import component PostDetail
import NewComponent from '@/components/NewComponent.vue';
import DashboardView from '@/page/master/DashboardView.vue';
import HomeView from '@/page/master/HomeView.vue';
import ProfileView from '@/page/ProfileView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/get-post', // Định nghĩa một tham số động ":id" để truyền vào id của bài viết
    name: 'PostDetail', // Tên của route
    component: PostDetail // Component cho trang chi tiết bài viết
  },
  {
    path : '/login',
    name : 'NewComponent' , 
    component : NewComponent 
  } , 
  {
    path : '/dashboard' , 
    name : 'DashboardView' , 
    component : DashboardView 
  } , 
  {
    path : '/profile',
    name : 'ProfileView' , 
    component : ProfileView  
  } , 
  {
    path : '/Home',
    name : 'HomeView' , 
    component : HomeView  
  } , 
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
