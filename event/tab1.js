// tab-button 클릭시 짝 맞춰서 tab-content 보여주기
const prod = document.querySelector("ul li:nth-child(1)");
const info = document.querySelector("ul li:nth-child(2)");
const ship = document.querySelector("ul li:nth-child(3)");

const div2 = document.querySelector("div:nth-child(2)");
const div3 = document.querySelector("div:nth-child(3)");
const div4 = document.querySelector("div:nth-child(4)");

console.log(div2.classList);

prod.addEventListener("click", () => {
  div3.classList.remove("show");
  div4.classList.remove("show");
  div2.classList.add("show");
  info.classList.remove("orange");
  ship.classList.remove("orange");
  prod.classList.add("orange");
});

info.addEventListener("click", () => {
  div2.classList.remove("show");
  div4.classList.remove("show");
  div3.classList.add("show");
  prod.classList.remove("orange");
  ship.classList.remove("orange");
  info.classList.add("orange");
});

ship.addEventListener("click", () => {
  div2.classList.remove("show");
  div3.classList.remove("show");
  div4.classList.add("show");
  prod.classList.remove("orange");
  info.classList.remove("orange");
  ship.classList.add("orange");
});
