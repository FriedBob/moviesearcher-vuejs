// 영화검색에 관련된 정보를 취급

import axios from 'axios'
import _uniqBy from 'lodash/uniqBy'

export default{

	namespaced: true,													// namespaced : movie.js가 store에서 모듈화되서 사용할 수 있는지를 설정
	state: () => ({														// state : 취급해야하는 data 개념, 여기서는 state(상태)라고 부름
		movies: [],
		message: '',
		loading: false
	}),							
	getters: {															// getters : state라는 계산된 (computed) 상태를 만들어내는 개념
		movieIds(state){
			return state.movies.map(m=>m.imdbID)
		}
	},						
	mutations: {
		updateState(state, payload){
			Object.keys(payload).forEach(key => {			// Object.keys(): 객체데이터의 속성의 이름들만으로 배열을 만듬 => ['movies','message','loading']
				state[key] = payload[key]
			})					

		},
		resetMovies(state) {											// mutations : methods 함수들과 유사, 관리하는 데이터들을 변경시켜줄 수 있다 (다른 영역의 함수에서는 허용되지않음)
			state.movies = []
		}
	},					
	actions: {															// actions : methods 함수들과 유사, 비동기로 동작함
		async searchMovies({ state, commit }, payload){			// state를 바로 인자로 넣진 못함 -> context {state,getters,mutations,actions 내포} 활용  -> commit을 구조할당하면 context 명시안해도됨
				// Serach movie method							// payload는 사용자가 인자로 넣은것을 저장함
				const { title, type, number, year} = payload
				const OMDB_API_KEY = 'b0d38b1f';
				const res = await axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=1`)
				const { Search, totalResults } = res.data 			// res.data 객체 내부의 두 속성을 구조분해할당
				commit('updateState',{
					movies: _uniqBy(Search, 'imdbID')				// id중복 해결 (lodash)
				})
				const total = parseInt(totalResults, 10)
				const pageLength = Math.ceil(total / 10)

				// 페이지 수가 1보다 많으면 추가요청
				if(pageLength > 1) {
					for(let page = 2; page<=pageLength; page++){
						if(page > number / 10) break;
						const res = await axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=${page}`)
						const { Search } = res.data
						commit('updateState',{
							movies: [...state.movies, ..._uniqBy(Search, 'imdbID')]		// 두 개의 배열의 내용을 새로운 배열에 전개연산자로 통합할당 
						})
					}
				}
		}
	}
}							 
