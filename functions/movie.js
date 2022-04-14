const axios = require('axios')  // nodejs환경에서 동작하는 module은 import,export가 아닌 require, exports 을 사용해야한다

// serverless function 은 무조건 async(비동기)로만 정의할수 있다
// statusCode 와 body를 가지는 객체로 return 해서 내보내야 한다
exports.handler = async function(event) {

	console.log(event)	// 체크용
	
	const payload = JSON.parse(event.body)
  const { title, type, year, page, id } = payload
	const OMDB_API_KEY = '7035c60c';
	const url = id 
	? `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${id}` 
	: `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=${page}`
	
    try{
			const { data } = await axios.get(url)
			if(data.Error) {			// data 처리에 에러가 생긴경우
				return {
					statusCode: 400,	// 잘못된 요청처리 : 데이터가 에러가 있는 상태에서 반환
					body: data.Error
				}
			}
			return {
				statusCode: 200,		// 정상적인 반환
				body: JSON.stringify(data)	// axios.get으로 반환한 객체데이터를 string화하여 body에 할당
			}
    } catch(error) {				// 데이터 자체에 문제가 생긴경우
			return {
				statusCode: error.response.status,
				body: error.message
			}
		}
	}
	
	// 위의 await async와 구현이 같다 -> netlify 형태에 맞게 수정된 것
// 	return new Promise((resolve, reject)=>{
// 		axios.get(url)
// 			.then(res=>{
// 				if(res.data.Error){
// 					reject(res.data.Error)
// 				}
// 				resolve(res)
// 			})
// 			.catch(err =>{
// 				reject(err.message)
// 			})
// 	})
// }