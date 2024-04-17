<template>
  <div class="success-message" v-if="show" :style="{top: topPos, right: rightPos}">
    <div class="progress-bar"></div>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'SuccessMessage',
  props: {
    type: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      show: true,
      topPos: '100px',
      rightPos: '10px',
      message: ''
    };
  },
  mounted() {
    setTimeout(() => {
      this.show = false;
    }, 3000);

    switch (this.type) {
      case 'login':
        this.message = 'Login Successful!';
        break;
      case 'register':
        this.message = 'Register Successful!';
        break;
      case 'logout':
        this.message = 'Logout Successful!';
        break;
      default:
        this.message = 'Action Successful!';
    }
  }
};
</script>

<style scoped>
.success-message {
  position: fixed;
  width: 300px;
  height: 50px;
  background-color: rgb(37, 230, 7);
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  text-align: center;
}

.progress-bar {
  width: 100%;
  height: 10px;
  background-color: #4CAF50;
  position: absolute;
  bottom: 0;
  left: 0;
}

@keyframes progressBarAnimation {
  0% {
    width: 100%;
  }
  100% {
    width: 0%;
  }
}

.progress-bar {
  animation: progressBarAnimation 3s linear forwards;
}
</style>
