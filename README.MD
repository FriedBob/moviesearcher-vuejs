# <div style="font-size:3rem; text-align:center">🎥 Movie Searcher</div>

[OMDb API](https://www.omdbapi.com/) 의 API를 활용하여 영화를 검색하여 정보를 나열해주는 사이트입니다.

해당 프로젝트는 `netlify`를 이용하여 온라인상에 배포되어 있습니다.

## 🚗 배포 사이트

---

https://celadon-pavlova-562e1f.netlify.app

&nbsp;

## 🚨 Issues

---

- localhost로 API를 요청할 시 요청을 거부당하는 문제가 있음, 배포 url로 이용 권장

- 배포 URL : https://celadon-pavlova-562e1f.netlify.app

# <div style="text-align:center">📚 Stacks</div>

<div style="text-align:center">
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/vue.js-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white">
<img src="https://img.shields.io/badge/scss-CC6699?style=for-the-badge&logo=sass&logoColor=white">
<img src="https://img.shields.io/badge/bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white">
<img src="https://img.shields.io/badge/webpack-8DD6F9?style=for-the-badge&logo=webpack&logoColor=black">
<img src="https://img.shields.io/badge/netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white">
<img src="https://img.shields.io/badge/ESLINT-4B32C3?style=for-the-badge&logo=ESLINT&logoColor=white">
</div>

&nbsp;

## APIs

[OMDb API](https://www.omdbapi.com/)

&nbsp;

# <div style="text-align:center">⚡ Features</div>

&nbsp;

## 영화 검색

---

- 영화 리스트를 클릭하여 세부정보를 볼 수 있습니다.

<img src="src/assets/search_movie.gif" width="800"/>

&nbsp;

- 영화 분류, 개봉 연도, 표시 정보 수를 조절할 수 있습니다.

  <img src="src/assets/search_movie.gif" width="800"/>

# <div style="text-align:center">⚽ Installation</div>

Note: `package.json` 에 관련 dependency가 등록되어 있습니다.

&nbsp;

터미널 상에서 다음 명령어를 입력하여 연관 패키지를 설치합니다.

```
npm install
```

&nbsp;

이후 프로젝트를 실행하기 위해서 다음 코드를 터미널 상에서 입력합니다.

```
npm run dev
```

&nbsp;

기본적으로 `netlify`를 서버로 이용하나 `webpack`을 이용할 경우 다음과 같이 터미널에 입력합니다.

```
npm run dev:webpack
```

&nbsp;

직접 프로젝트를 빌드하여 실행시킬 경우 https://localhost:8079 에서 결과를 확인할 수 있습니다.
