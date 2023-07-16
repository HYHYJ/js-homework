const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};
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

//! 선택자 불러오기
const userEmail = document.querySelector("#userEmail");
const userPassword = document.querySelector("#userPassword");
const btnLogin = document.querySelector(".btn-login");

//! 이메일 인풋 이벤트
// userEmail.addEventListener("input", function () {
//   if (emailReg(userEmail.value) === true || userEmail.value === "") {
//     userEmail.classList.remove("is--invalid");
//   } else {
//     userEmail.classList.add("is--invalid");
//   }
// });
//! 비밀번호 인풋 이벤트
// userPassword.addEventListener("input", function () {
//   if (pwReg(userPassword.value) === true || userPassword.value === "") {
//     userPassword.classList.remove("is--invalid");
//   } else {
//     userPassword.classList.add("is--invalid");
//   }
// });

//! 이메일 인풋 이벤트
function handlerEmailInput() {
  if (emailReg(userEmail.value) === true || userEmail.value === "") {
    userEmail.classList.remove("is--invalid");
  } else {
    userEmail.classList.add("is--invalid");
  }
}
//! 비밀번호 인풋 이벤트
function handlerPasswordInput() {
  if (pwReg(userPassword.value) === true || userPassword.value === "") {
    userPassword.classList.remove("is--invalid");
  } else {
    userPassword.classList.add("is--invalid");
  }
}

//! 클릭 이벤트 함수
function handlerClick(event) {
  event.preventDefault(); //찾아보기

  //! 아이디 비밀번호가 일치하면 welcome 페이지로 이동
  if (userEmail.value === user.id && userPassword.value === user.pw) {
    window.location.href = "welcome.html";
  } else if (
    !(userEmail.value === user.id) &&
    !(userPassword.value === user.pw)
  ) {
    alert("아이디와 비밀번호가 올바르지 않습니다.");
  } else if (!(userEmail.value === user.id)) {
    alert("아이디가 올바르지 않습니다.");
  } else if (!(userPassword.value === user.pwuser)) {
    alert("비밀번호가 올바르지 않습니다.");
  }
}

//! addEventListener input, click
userEmail.addEventListener("input", handlerEmailInput);
userPassword.addEventListener("input", handlerPasswordInput);
btnLogin.addEventListener("click", handlerClick);

/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/
