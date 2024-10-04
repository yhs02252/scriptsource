// 코드 개선

// tab-button 클릭시 짝 맞춰서 tab-content 보여주기
const allli = document.querySelectorAll(".tab-button");

const alldiv = document.querySelectorAll(".tab-content");

allli.forEach((li, index) => {
  li.addEventListener("click", (e) => {
    console.log(e.target.classList);
    console.log(alldiv[index].classList);

    allli.forEach((item) => item.classList.remove("orange"));

    alldiv.forEach((item) => item.classList.remove("show"));

    e.target.classList.add("orange");
    alldiv[index].classList.add("show");
  });
});

// console.log(div2.classList);

// prod.addEventListener("click", () => {
//   div3.classList.remove("show");
//   div4.classList.remove("show");
//   div2.classList.add("show");
//   info.classList.remove("orange");
//   ship.classList.remove("orange");
//   prod.classList.add("orange");
// });

// info.addEventListener("click", () => {
//   div2.classList.remove("show");
//   div4.classList.remove("show");
//   div3.classList.add("show");
//   prod.classList.remove("orange");
//   ship.classList.remove("orange");
//   info.classList.add("orange");
// });

// ship.addEventListener("click", () => {
//   div2.classList.remove("show");
//   div3.classList.remove("show");
//   div4.classList.add("show");
//   prod.classList.remove("orange");
//   info.classList.remove("orange");
//   ship.classList.add("orange");
// });
