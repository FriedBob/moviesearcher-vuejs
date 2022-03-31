import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/index.js'          // index라는 이름의 파일을 특정 폴더에서 가져올때는 index.js라는 이름을 생략할수 있음 ex) './routes' === './routes/index.js'
import store from './store/index.js'

createApp(App)
    .use(router)    // use() => 특정한 플러그인을 연결할 때 쓰이는 method       // 구성한 routes의 js를 router로 import하여 플러그인처럼 사용
    .use(store)                                                              // vuex의 store 연결
    .mount('#app')