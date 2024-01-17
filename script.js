/* Variables */
const content1 =
  "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.";
const content2 =
  "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.";
const content3 =
  "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!";
const content4 =
  "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.";

/* Afficher le boutton - */
const iconPlus = document.querySelectorAll(".icon-plus");
iconPlus.forEach(function (icon) {
  icon.addEventListener("click", function () {
    icon.classList.toggle("hidden");
    icon.parentNode.nextElementSibling
      .querySelector(".icon-minus")
      .classList.toggle("hidden");
  });
});

/* Afficher le boutton + */
const iconMinus = document.querySelectorAll(".icon-minus");
iconMinus.forEach(function (icon) {
  icon.addEventListener("click", function () {
    icon.classList.toggle("hidden");
    icon.parentNode.previousElementSibling
      .querySelector(".icon-plus")
      .classList.toggle("hidden");
  });
});
