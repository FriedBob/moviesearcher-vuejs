// 영화검색에 관련된 정보를 취급

import axios from 'axios'
import _uniqBy from 'lodash/uniqBy'

const _defaultMessage = 'Please Search the movie title.';

export default{

	namespaced: true,													// namespaced : movie.js가 store에서 모듈화되서 사용할 수 있는지를 설정
	state: () => ({														// state : 취급해야하는 data 개념, 여기서는 state(상태)라고 부름
		movies: [],
		message: _defaultMessage,
		loading: false,
		theMovie: {}
	}),							
	getters: {															// getters : state라는 계산된 (computed) 상태를 만들어내는 개념
		movieIds(state){
			return state.movies.map(m=>m.imdbID)
		}
	},						
	mutations: {														// mutations : methods 함수들과 유사, 관리하는 데이터들을 변경시켜줄 수 있다 (다른 영역의 함수에서는 허용되지않음)
		updateState(state, payload){
			Object.keys(payload).forEach(key => {			// Object.keys(): 객체데이터의 속성의 이름들만으로 배열을 만듬 => ['movies','message','loading']
				state[key] = payload[key]
			})					

		},
		resetMovies(state) {											
			state.movies = []
			state.message = _defaultMessage
			state.loading = false
		}
	},					
	actions: {															// actions : methods 함수들과 유사, 비동기로 동작함
		async searchMovies({ state, commit }, payload){			// state를 바로 인자로 넣진 못함 -> context {state,getters,mutations,actions 내포} 활용  -> commit을 구조할당하면 context 명시안해도됨
				// Serach movie method							// payload는 사용자가 인자로 넣은것을 저장함
				if (state.loading){		// 아직 처리중(loading)이면 명령을 실행하지않음
					return 
				}
				commit('updateState', {
					message: '',
					loading: true
				})
				try{
					
				const res = await _fetchMovie({...payload, page:1})

				const { Search, totalResults } = res.data 			// res.data 객체 내부의 두 속성을 구조분해할당
				commit('updateState',{
					movies: _uniqBy(Search, 'imdbID')				// id중복 해결 (lodash)
				})
				const total = parseInt(totalResults, 10)
				const pageLength = Math.ceil(total / 10)

				// 페이지 수가 1보다 많으면 추가요청
				if(pageLength > 1) {
					for(let page = 2; page<=pageLength; page++){
						if(page > payload.number / 10) break;
						const res = await _fetchMovie({ ...payload, page:page })
						const { Search } = res.data
						commit('updateState',{
							movies: [...state.movies, ..._uniqBy(Search, 'imdbID')]		// 두 개의 배열의 내용을 새로운 배열에 전개연산자로 통합할당 
						})
					}
				} 
			} catch(message) {
				commit('updateState', {
					movies: [],
					message: message
				})

			} finally {
				commit('updateState',{
					loading: false
				})
			}
		},
		async searchMovieWithId({state,commit}, payload){
			if(state.loading) return

			commit('updateState',{
				theMovie: {},
				loading: true
			})
			try{
				const res = await _fetchMovie(payload)
				commit('updateState',{
					theMovie:res.data
				})
			} catch(error){
				commit('updateState', {
					theMovie:{}
				})
			} finally {
				commit('updateState',{
					loading: false
				})
			}
		}
	}
}							 

function _fetchMovie(payload){					// 언더바(_)를 붙임으로써 현재 파일에서만 사용할 함수임을 명시
	const { title, type, year, page, id } = payload
	const OMDB_API_KEY = '7035c60c';
	const url = id 
	? `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${id}` 
	: `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=${page}`
	

	return new Promise((resolve, reject)=>{
		axios.get(url)
			.then(res=>{
				if(res.data.Error){
					reject(res.data.Error)
				}
				resolve(res)
			})
			.catch(err =>{
				reject(err.message)
			})
	})

}