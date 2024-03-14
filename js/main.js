const btnModel = document.querySelector(".deliver");
const modal = document.querySelector(".modal");
const btnClose = document.querySelector(".close");

btnModel.addEventListener("click", () => {
  modal.style.display = "block";
});

btnClose.addEventListener("click", () => {
  modal.style.display = "none";
});

//////////////////////////////////////////////////////////

const sidebar = document.querySelector(".sidebar");
const burger = document.querySelector(".btn-burger");
const btnBurgerClose = document.querySelector(".btn-burger-close");
burger.addEventListener("click", () => {
  sidebar.classList.toggle("show");
});
btnBurgerClose.addEventListener("click", () => {
  sidebar.classList.toggle("show");
});
