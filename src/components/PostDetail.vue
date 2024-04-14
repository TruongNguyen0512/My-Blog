<template>
    <div class="post-container" >
        <div v-for="(post, index) in posts" :key="index">
            <h2>{{ post.title }}</h2>
            <p>{{ post.content }}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Cookies from 'js-cookie';

export default {
    name: 'PostList',
    data() {
        return {
            posts: [] // Khởi tạo mảng để lưu trữ các bài viết
        }
    },
    mounted() {
        // Lấy accessToken từ cookie
        const accessToken = Cookies.get('accessToken');

        // Kiểm tra nếu accessToken tồn tại
        if (accessToken) {
            // Gửi yêu cầu GET đến API để lấy danh sách bài viết
            axios.get(`http://localhost:3000/api/posts/get-posts`, {
                headers: {
                    Authorization: `Bearer ${accessToken}` // Thêm accessToken vào tiêu đề yêu cầu
                }
            })
            .then(response => {
                // Gán danh sách bài viết từ response vào mảng posts
                this.posts = response.data;
            })
            .catch(error => {
                console.error('Error fetching posts:', error);
            });
        } else {
            console.error('No accessToken found in cookie');
        }
    }
}
</script>

<style scoped>
/* CSS styles for the PostList component */
</style>
