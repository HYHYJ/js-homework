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

//! 사용자가 인풋을 형식에 맞게 썻는지 확인
function isInvalid(reg, input) {
  if (reg(input.value) === true) {
    input.classList.remove("is--invalid");
  } else {
    input.classList.add("is--invalid");
  }
}

//! 인풋값과 가지고 있는 값이 일치하는지 확인
function NotCollect(input, origin) {
  if (!input.value === user.origin) {
    input.classList.add("is--invalid");
  } else {
    input.classList.remove("is--invalid");
  }
}

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

//! 버튼 클릭 이벤트
btnLogin.addEventListener("click", clickHandler);

//! 인풋 클릭 이벤트
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
/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/
