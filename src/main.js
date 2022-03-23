import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/index.js'

createApp(App)
    .use(router)    // use() => 특정한 플러그인을 연결할 때 쓰이는 method       // 구성한 routes의 js를 router로 import하여 플러그인처럼 사용
    .mount('#app')