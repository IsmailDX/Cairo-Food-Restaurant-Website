const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");

burger.addEventListener("click", () => {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});

const load = document.querySelector("#load");
const grid2 = document.querySelector("#grid2");

load.addEventListener("click", () => {
  if (!load.classList.contains("hidden")) {
    load.classList.add("hidden");
    grid2.classList.remove("hidden");
    grid2.classList.add("grid");
  }
});
