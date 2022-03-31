// npm install vuex@next (vuejs 3.0 대응) 의 config 파일
import { createStore } from 'vuex'
import movie from './movie.js'
import about from './about'

// 연결할 모듈들을 명시
export default createStore({
    modules: {
        movie,
        about
    }
})