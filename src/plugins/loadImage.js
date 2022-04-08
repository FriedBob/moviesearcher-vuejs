// 구현한 기능을 플러그인으로 만들어서 보편적으로 적용

export default{
    install(app){       // install 이라는 method가 vuejs에서 plugin으로 활용될 때 어떠한 매개변수로 현재 프로젝트에 해당하는 객체데이터를 내려줌 : app
        app.config.globalProperties.$loadImage = (src) => {     // loadImage라는 함수를 만듬 (비동기)
            return new Promise((resolve)=>{
                const img = document.createElement('img')
                img.src = src
                img.addEventListener('load', ()=> {
                    // 완료 처리를 위해 promise를 사용
                    resolve()
                })
            })
        }
    }
}

// 만들어진 plugin의 등록, 사용의 절차가 필요함