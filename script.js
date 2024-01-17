/* Afficher le boutton "-" */
const iconPlus = document.querySelectorAll(".icon-plus");
iconPlus.forEach(function (icon) {
  icon.addEventListener("click", function () {
    icon.classList.toggle("hidden");
    icon.parentNode.nextElementSibling
      .querySelector(".icon-minus")
      .classList.toggle("hidden");
  });
});

/* Afficher le boutton "+" */
const iconMinus = document.querySelectorAll(".icon-minus");
iconMinus.forEach(function (icon) {
  icon.addEventListener("click", function () {
    icon.classList.toggle("hidden");
    icon.parentNode.previousElementSibling
      .querySelector(".icon-plus")
      .classList.toggle("hidden");
  });
});

const plus = document.querySelectorAll(".button-plus");
const content = document.querySelectorAll(".content");
const minus = document.querySelectorAll(".button-minus");

for (let i = 0; i < plus.length; i++) {
  plus[i].addEventListener("click", function () {
    content[i].classList.remove("hidden");
  });
}

for (let j = 0; j < minus.length; j++) {
  minus[j].addEventListener("click", function () {
    content[j].classList.add("hidden");
  });
}
