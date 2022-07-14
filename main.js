let collapseBtns = document.querySelectorAll(".collapse_btn");
let accordionCards = document.querySelectorAll(".accordion");
// let hiddenAnswers = document.querySelectorAll(".answ");

for (let i = 0; i < collapseBtns.length; i++) {
  collapseBtns[i].addEventListener("click", function () {
    for (let c = 0; c < accordionCards.length; c++) {
      accordionCards[i].style.display = "block";
      collapseBtns[i].style.transform = "rotateX(180deg)";

      let showAccordion = collapseBtns[i].classList.toggle("hides");

      if (showAccordion == true) {
        accordionCards[i].style.display = "none";
        collapseBtns[i].style.transform = "rotateX(360deg)";
      }
    }
  });
}
