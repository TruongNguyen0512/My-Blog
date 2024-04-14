<template>
  <div class="success-message" v-if="success" :style="{top: topPos, right: rightPos}">
    <div class="progress-bar"></div>
    <p>Register/Login Successful!</p>
  </div>
</template>

<script>
export default {
  name: 'SuccessMessage',
  data() {
    return {
      success: true, // Điều chỉnh thành false khi không muốn hiển thị
      topPos: '100px', // Điều chỉnh top position
      rightPos: '10px' // Điều chỉnh left position
    };
  },
  mounted() {
    // Thiết lập độ trễ 2 giây trước khi ẩn thành phần
    setTimeout(() => {
      this.success = false;
    }, 3000);
  }
};
</script>

<style scoped>
.success-message {
  position: fixed;
  width: 300px; /* Điều chỉnh kích thước phù hợp */
  height: 50px; /* Điều chỉnh kích thước phù hợp */
  background-color: rgb(37, 230, 7);
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  text-align: center;
}

.rectangle {
  width: 100px; /* Điều chỉnh kích thước phù hợp */
  height: 50px; /* Điều chỉnh kích thước phù hợp */
  background-color: #4CAF50;
  margin: 0 auto;
}

.progress-bar {
  width: 100%;
  height: 10px; /* Điều chỉnh kích thước phù hợp */
  background-color: #4CAF50;
  position: absolute;
  bottom: 0;
  left: 0;
}

/* Hiệu ứng giảm dần */
@keyframes progressBarAnimation {
  0% {
    width: 100%; /* Độ rộng tối đa */
  }
  100% {
    width: 0%; /* Độ rộng tối thiểu */
  }
}

.progress-bar {
  animation: progressBarAnimation 3s linear forwards; /* Thời gian 3 giây */
}
</style>
