import { createApp } from 'vue'
import App from './App.vue'


import 'vue-fullpage/vue-fullpage.css'
import VueFullpage from 'vue-fullpage'


// 全局样式清除
import '@/assets/style/reset.css'



// 创建挂载
createApp(App).use(VueFullpage).mount('#app')
