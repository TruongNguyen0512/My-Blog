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
      this.$emit('toggle-active'); // Gửi sự kiện lên component cha để xử lý hiển thị/ẩn
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
