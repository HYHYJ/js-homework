# 자바스크립트 네이버 로그인 과제 (~7/16)
### 1. 완성 이미지
##### - 아이디, 비밀번호 인풋박스가 빈칸일 때
  <img src="./images/1.png" width="300px">

##### - 아이디가 맞지 않을 때
  <img src="./images/2.png" width="300px">

#####  - 비밀번호가 맞지 않을 때
  <img src="./images/3.png" width="300px">

#####  - 아이디, 비밀번호가 맞지 않을 때
  <img src="./images/4.png" width="300px">

#####  - 아이디, 비밀번호가 맞아서 Welcome Page로 이동
  <img src="./images/5.png" width="300px">


<br />

### 2. Javascript
---
- 사용자가 설정한 아이디, 비밀번호 정보 const user로 설정
```js
const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};
```
- 사용자가 이메일, 비밀번호를 잘 입력했는지 확인하는 정규식
```js
//사용자가 이메일을 잘 입력했는지 확인하는 정규식?
function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}
//사용자가 비밀번호을 잘 입력했는지 확인하는 정규식?
function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}
```
- querySelector로 선택자 불러오기
```js
//! 선택자 불러오기
const userEmail = document.querySelector("#userEmail");
const userPassword = document.querySelector("#userPassword");
const btnLogin = document.querySelector(".btn-login");
```
- 사용자가 인풋에 지정한 정규식형식에 맞게 썻는지 확인하는 함수 isInvalid
```js

//! 사용자가 인풋을 형식에 맞게 썻는지 확인
function isInvalid(reg, input) {
  if (reg(input.value) === true) {
    input.classList.remove("is--invalid");
  } else {
    input.classList.add("is--invalid");
  }
}
```
- 입력한 인풋값과 사용자가 본래 지정한 설정한 아이디, 비밀번호 값이 일치하는지 확인하는 함수(일치하지 않으면 인풋 밑에 경고문자 보이게하기) NotCollect
```js
//! 인풋값과 가지고 있는 값이 일치하는지 확인
function NotCollect(input, origin) {
  if (!input.value === user.origin) {
    input.classList.add("is--invalid");
  } else {
    input.classList.remove("is--invalid");
  }
}
```
- 클릭 이벤트 함수 function clickHandler 
  - 아이디 비밀번호가 일치하면 welcome 페이지로 이동하는 if문
```js
//! 클릭 이벤트 함수
function clickHandler(event) {
  event.preventDefault(); //찾아보기

  isInvalid(emailReg, userEmail);
  isInvalid(pwReg, userPassword);

  //! 아이디 비밀번호가 일치하면 welcome 페이지로 이동
  if (userEmail.value === user.id && userPassword.value === user.pw) {
    window.location.href = "welcome.html";
  } else if (!userEmail.value === user.id && !userPassword.value === user.pw) {
    NotCollect(userEmail, id);
    NotCollect(userPassword, pw);
  } else if (!userEmail.value === user.id) {
    NotCollect(userEmail, id);
  } else if (!userPassword.value === user.pw) {
    NotCollect(userPassword, pw);
  }
}
```
- 버튼 클릭 이벤트 addEventListener
```js
//! 버튼 클릭 이벤트
btnLogin.addEventListener("click", clickHandler);

```
- 인풋 이벤트 addEventListener
```js
//! 인풋 이벤트
userEmail.addEventListener("input", function () {
  event.preventDefault();
  if (emailReg(userEmail.value)) {
    userEmail.classList.add("is-active");
  } else {
    userEmail.classList.remove("is-active");
  }
});

userPassword.addEventListener("input", function () {
  event.preventDefault();
  if (pwReg(userPassword.value)) {
    userPassword.classList.add("is-active");
  } else {
    userPassword.classList.remove("is-active");
  }
});
```

<br />

### 3. 어려웠던 점
---
- input의 addEventListener가 작동을 하지 않는다.
- 우선, isInvalid 함수를 따로 만들어 클릭이벤트에서 함수를 실행했다.
- addEventListener에 대한 학습이 더욱 필요한거 같다.
```js
userEmail.addEventListener("input", function ()
```


