import { createApp } from 'vue';
import { createPinia } from 'pinia';

import router from '@/router';
import App from '@/App.vue';

import '@/styles/common/index.scss';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia).use(router).mount('#app');
