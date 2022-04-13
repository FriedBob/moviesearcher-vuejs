// 페이지를 관리해주는 구성파일 일종의 setting?

import { createRouter, createWebHashHistory } from 'vue-router'         // npm install vue-router 로 설치한 패키지 에서 사용할 method 임포트

// routes를 통해 path 에 연결할 Component들을 같은 폴더 내 .vue파일에서 import함
import Home from './Home'
import About from './About'
import Movie from './Movie'
import NotFound from './NotFound'

export default createRouter({                    // createRouter의 결과를 export

    // Hash, History 모드로 구분됨 (프로젝트는 Hash모드 사용)
    // Hash 모드 : https://google.com/#/search 등의 모양으로 페이지에 접근하는 방법
    // Hash 모드를 사용하면 새로고침 시 페이지를 찾을 수 없는 에러가 발생하지않음
    history: createWebHashHistory(),
    
    // page들을 구분해주는 개념
    routes: [
        {
            path: '/',
            component: Home               // https://google.com/   -> main page로 이동하겠다.
        },
        {
            path: '/about',
            component: About               // https://google.com/about   -> about page로 이동하겠다. 여기에 연결된 vuejs component가 실행됨
        },
        {
            path: '/movie/:id',            // :id 동적으로 페이지를 넣어줄수 있다
            component: Movie
        },
        {
            path: '/:pathMatch(.*)',         // "pathMatch"부분은 무슨이름이어도 상관없다 이후의 () 안의 정규표현식이 중요    .* -> 1글자 매칭을 최대한 많이 = 전부 -> 위의 페이지들이 아닌 나머지 내용 중 매칭되는 전부
            component: NotFound
        }
    ]
})