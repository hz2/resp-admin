import { createApp } from 'vue'
// TypeScript error? Run VSCode command
// TypeScript: Select TypeScript version - > Use Workspace Version
import App from './App.vue'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

import store from "./store";
import router from "./router";

const app = createApp(App)
app.use(ElementPlus, { size: 'small', zIndex: 3000 });
app.use(store).use(router)
app.mount('#app')