// 버튼 클릭 시 alert-box 보여주기
const box = document.querySelector(".alert-box1");

const notification = (state, msg) => {
  box.style.display = state;

  box.firstChild.nodeValue = msg;
};

// alert1 클릭 시 : 아이디를 입력해 주세요
// alert2 클릭 시 : 비밀번호를 입력해 주세요
// console.log(box.firstChild);

box.firstChild = "아이디를";

document
  .querySelector(".alert1")
  .addEventListener("click", () =>
    notification("block", "아이디를 입력해 주세요")
  );

document
  .querySelector(".alert2")
  .addEventListener("click", () =>
    notification("block", "비밀번호를 입력해 주세요")
  );

document
  .querySelector(".close")
  .addEventListener("click", () => notification("none"));
