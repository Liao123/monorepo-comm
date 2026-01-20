import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// import ViewUIPlus from 'view-ui-plus'
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
