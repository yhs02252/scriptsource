// form 이 submit 되면
const form = document.querySelector("form").addEventListener("submit", (e) => {
  // submit 중지
  e.preventDefault();

  const nameReg = /^(?=[가-힣])[가-힣]{2,6}$/;
  const idReg = /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#])[A-Za-z0-9!@#]{6,12}$/;
  const emailReg =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const passwordReg =
    /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#_*])[A-Za-z0-9!@#_*]{8,12}$/;

  // 이름
  const name = document.querySelector("#name");

  if (!nameReg.test(name.value)) {
    name.closest("div").lastElementChild.innerHTML = "이름을 확인해 주세요";
    return;
  } else {
    name.closest("div").lastElementChild.innerHTML = "";
  }

  // id / password / email 유효성 검증 후 형식에 맞지 않는다면 메세지 추가 error에 표시
  // id
  const id = document.querySelector("#inputId");

  if (!idReg.test(id.value)) {
    // idReg의 다음 다음 요소 찾기
    // idReg.nextElementSibling.nextElementSibling.innerHTML =
    id.closest("div").lastElementChild.innerHTML = "아이디을 확인해 주세요";
    return;
  } else {
    id.closest("div").lastElementChild.innerHTML = "";
  }

  // email
  const email = document.querySelector("#staticEmail");

  if (!emailReg.test(email.value)) {
    email.closest("div").lastElementChild.innerHTML = "이메일을 확인해 주세요";
    return;
  } else {
    email.closest("div").lastElementChild.innerHTML = "";
  }

  // password
  const password = document.querySelector("#inputPassword");

  if (!passwordReg.test(password.value)) {
    password.closest("div").lastElementChild.innerHTML =
      "비밀번호을 확인해 주세요";
    return;
  } else {
    password.closest("div").lastElementChild.innerHTML;
  }

  // closest(선택자) : 선택자와 일치한 가장 가까운 부모 요소
  console.log(id.closest("div"));

  e.target.submit();
});
