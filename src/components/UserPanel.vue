<template>
    <div class="user-panel" v-if="user">
      <img v-if="user.avatar" :src="user.avatar" alt="Avatar">
      <span>{{ user.name }}</span>
    </div>
  </template>
  
  <script>
  export default {
    name: 'UserPanel',
    props: {
      user: {
        type: Object,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  .user-panel {
    display: flex;
    align-items: center;
  }
  
  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 10px;
  }
  </style>
  