# Todolist-fullstack

회원가입, 로그인 그리고 페이지별 권한관리 기능을 포함하는 투두리스트 프로젝트입니다.

### 배포사이트
https://merry-puppy-53d3d2.netlify.app/


# 시작 가이드

### Requirements

- Node.js 18.17.0
- npm 9.8.1

## Installation

```jsx
$ git clone https://github.com/chobuzz/todolist-fullstack.git
$ cd todolist-fullstack
```

## Frontend

```jsx
$ cd todolist-frontend
$ npm start
```

## Backend

```jsx
$ cd todolist-backend
$ npm start
```

# Stacks

## Environment

<img src="https://img.shields.io/badge/Visual Studio Code-007ACC?style=flat-square&logo=Visual Studio Code&logoColor=white"/>
<img src="https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white"/>
<img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white"/>

## Development

<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black"/>
<img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=Node.js&logoColor=white"/>
<img src="https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=MongoDB&logoColor=white"/>

# 화면 구성

- 회원가입 페이지

<img src="./todolist-frontend/image/register-page.png">

- 로그인 페이지

<img src="./todolist-frontend/image/login-page.png">

- 투두리스트 페이지

<img src="./todolist-frontend/image/todo-page.png">

# 주요 기능

### 회원가입, 로그인, 로그아웃 기능

- 회원가입과 로그인, 로그아웃 기능

### 투두리스트 기능

- 투두리스트 추가 및 삭제, 끝남 표시 기능
- 로그인한 유저에 따라 투두리스트 작성자 표시 기능

### 페이지별 권한관리 기능

- 로그인 하지 않은 유저는 투두리스트 페이지(루트 페이지)로 이동 권한 제한
- 로그인 한 유저는 로그인 페이지로 이동 제한

## 아키텍쳐

- 프론트엔드

```jsx
📦todolist-frontend
┣ 📂public
┃ ┣ 📜favicon.ico
┃ ┣ 📜index.html
┃ ┣ 📜logo192.png
┃ ┣ 📜logo512.png
┃ ┣ 📜manifest.json
┃ ┣ 📜note.png
┃ ┗ 📜robots.txt
┣ 📂src
┃ ┣ 📂components
┃ ┃ ┣ 📜TodoBoard.js
┃ ┃ ┗ 📜TodoItem.js
┃ ┣ 📂pages
┃ ┃ ┣ 📜LoginPage.js
┃ ┃ ┣ 📜RegisterPage.js
┃ ┃ ┗ 📜TodoPage.js
┃ ┣ 📂route
┃ ┃ ┗ 📜PrivateRoute.js
┃ ┣ 📂utils
┃ ┃ ┗ 📜api.js
┃ ┣ 📜App.css
┃ ┣ 📜App.js
┃ ┣ 📜App.test.js
┃ ┣ 📜index.css
┃ ┣ 📜index.js
┃ ┣ 📜logo.svg
┃ ┣ 📜reportWebVitals.js
┃ ┗ 📜setupTests.js
┣ 📜.env
┣ 📜.gitignore
┣ 📜package-lock.json
┣ 📜package.json
```

- 백엔드

```jsx
📦todolist-backend
┣ 📂.ebextensions
┃ ┗ 📜cors.config
┣ 📂controllers
┃ ┣ 📜auth.controller.js
┃ ┣ 📜task.controller.js
┃ ┗ 📜user.controller.js
┣ 📂models
┃ ┣ 📜Task.js
┃ ┗ 📜User.js
┣ 📂routes
┃ ┣ 📜index.js
┃ ┣ 📜task.api.js
┃ ┗ 📜user.api.js
┣ 📜.env
┣ 📜.gitignore
┣ 📜app.js
┣ 📜package-lock.json
┣ 📜package.json
┣ 📜procfile
┗ 📜todolist-backend.zip
```
