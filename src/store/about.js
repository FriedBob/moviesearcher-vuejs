// 개발자 or 사용자 정보에 관련된 정보를 취급

export default {
    namespaced: true,
    state: () => ({              // state를 함수형으로 반환해야하는 이유 : 객체데이터는 배열데이터와 같이 참조형 데이터이기때문에 불변성을 유지하려면 함수로 만들어 반환해야 state에서 사용되는 데이터가 고유해짐
        name: 'FriedBob',
        email: 'isshin95@gmail.com',
        blog: 'https://github.com/FriedBob',
        phone: '+82-10-xxxx-xxxx',
        image: 'https://avatars.githubusercontent.com/u/50436527?s=400&u=a9f6c8212c0c0b509b710d5021baf92bf2ff5ef8&v=4'
    })
}