<template>
    <div>
        <h2>{{ post.title }}</h2>

        <p>{{ post.content }}</p>
    </div>
</template>

<script>
export default {
    name : 'PostDetail' ,
    data() {
        return {
            post : null
        }
    },
    mounted() {
        this.post = {
            id:this.$route.params.id , 
            title : 'Sample Post' , 
            content : 'This is a sample post content'
        }
    }
}

</script>

<style scoped>

</style>