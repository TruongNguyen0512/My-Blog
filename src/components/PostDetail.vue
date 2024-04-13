<template>
    <div>
        <h2>{{ post.title }}</h2>
        <p>{{ post.content }}</p>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'PostDetail',
    data() {
        return {
            post: null
        }
    },
    mounted() {
        // Lấy id bài viết từ tham số đường dẫn
        const postId = this.$route.params.postid;

        // Gửi yêu cầu GET đến API để lấy thông tin của bài viết
        axios.get(`http://localhost:3000/api/posts/get-posts/${postId}`)
            .then(response => {
                // Gán dữ liệu bài viết vào thuộc tính post
                this.post = response.data;
            })
            .catch(error => {
                console.error('Error fetching post:', error);
            });
    }
}
</script>

<style scoped>
/* CSS styles for the PostDetail component */
</style>
