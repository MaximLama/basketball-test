import '@/assets/scss/index.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ClickOutside from '@/directives/click-outside';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.directive('click-outside', ClickOutside);

app.mount('#app')
