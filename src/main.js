import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

createApp(App).use(router).config.devtools = true; //.config.devtools = true;

createApp(App).use(router).mount('#app');
