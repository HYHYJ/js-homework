const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};

//인풋 값 확인하는 방법 : $0.value
const userEmail = document.querySelector("#userEmail");
const userPassword = document.querySelector("#userPassword");
const btnLogin = document.querySelector(".btn-login");

function isInvalid(input) {
  if (emailReg(input.value) === true) {
    input.classList.remove("is--invalid");
  } else {
    input.classList.add("is--invalid");
  }
}
function NotCollect(input, origin) {
  if (!input.value === user.origin) {
    input.classList.add("is--invalid");
  }
}

let r;

function clickHandler() {
  event.preventDefault();
  isInvalid(userEmail);
  isInvalid(userPassword);
  if (userEmail.value === user.id && userPassword.value === user.pw) {
    window.location.href = "welcome.html";
  } else if (!userEmail.value === user.id || !userPassword.value === user.pw) {
    if (!userEmail.value === user.id) {
      userEmail.classList.add("is--invalid");
    }
    if (!userPassword.value === user.pw) {
      userPassword.classList.add("is--invalid");
    }
  }
}
btnLogin.addEventListener("click", clickHandler);
/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/
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
