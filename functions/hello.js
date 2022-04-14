exports.handler = async function(event, context){
    return {
        // 정상적인 응답
        statusCode: 200,
        // string 타입만 할당가능 -> JSON으로 문자로 변환시켜서 할당도 가능
        body: JSON.stringify({
            name: 'FRIEDBOB',
            age: 85,
            email: 'isshin95@gmail.com'
        })
    }
}