<template>
    <li @click="handleItemClick" :class="{ active: isActive }">
      <slot></slot>
    </li>
  </template>
  
  <script>
  export default {
    name: 'MenuItem',
    props: {
      isActive: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      handleItemClick() {
        // Xử lý khi mục menu được nhấp vào
      }
    }
  };
  </script>
  
  <style scoped>
  li {
    cursor: pointer;
  }
  
  .active {
    font-weight: bold;
  }
  </style>
  