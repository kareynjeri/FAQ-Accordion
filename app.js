//selecting the elements

// buttons
const collapseButton_1 = document.getElementById("collapse_btn_1");
const collapseButton_2 = document.getElementById("collapse_btn_2");
const collapseButton_3 = document.getElementById("collapse_btn_3");
const collapseButton_4 = document.getElementById("collapse_btn_4");
const collapseButton_5 = document.getElementById("collapse_btn_5");

//collapsibles
const collapseCard_1 = document.getElementById("collapse_card1");
const collapseCard_2 = document.getElementById("collapse_card2");
const collapseCard_3 = document.getElementById("collapse_card3");
const collapseCard_4 = document.getElementById("collapse_card4");
const collapseCard_5 = document.getElementById("collapse_card5");

//frequently asked question
const faqs = document.querySelectorAll(".ques");
const collapseansw = document.querySelectorAll(".after");
const que1 = document.querySelector(".ques1");
const que2 = document.querySelector(".ques2");
const que3 = document.querySelector(".ques3");
const que4 = document.querySelector(".ques4");
const que5 = document.querySelector(".ques5");

//addeventlistener

const showAccordion = () => {
  let smth = collapseButton_1.classList.toggle("show-card");
  if (smth === true) {
    collapseCard_1.style.display = "block";
    que1.style.color = "hsl(238, 29%, 16%)";
    que1.style.fontWeight = "400";
    collapseButton_1.style.transform = "rotateX(180deg)";
  } else {
    que1.style.fontWeight = "200";
    collapseCard_1.style.display = "none";
    que1.style.color = " hsl(240, 6%, 50%)";
    collapseButton_1.style.transform = "rotateX(360deg)";
  }
};
collapseButton_1.addEventListener("click", showAccordion);

// const collapseCard1 = () => {

//         if( collapseCard_1.style.display === 'none' ){
//             collapseCard_1.style.display = 'block';
//             // collapseCard_1.classList.add("active");
//            que1.style.fontWeight = "400";
//            que1.style.color = "hsl(238, 29%, 16%)";
//         }
//         else{
//             collapseCard_1.style.display='none';
//         }

// }

// collapseButton_1.addEventListener("click" , collapseCard1)

const collapseCard2 = () => {
  if (collapseCard_2.style.display === "none") {
    collapseCard_2.style.display = "block";
    que2.style.color = "hsl(238, 29%, 16%)";
    que2.style.fontWeight = "400";
    collapseButton_2.style.transform = "rotateX(180deg)";
  } else {
    collapseCard_2.style.display = "none";
    que2.style.fontWeight = "200";
    que2.style.color = " hsl(240, 6%, 50%)";
    collapseButton_2.style.transform = "rotateX(360deg)";
  }
};

collapseButton_2.addEventListener("click", collapseCard2);

const collapseCard3 = () => {
  if (collapseCard_3.style.display === "none") {
    collapseCard_3.style.display = "block";
    que3.style.color = "hsl(238, 29%, 16%)";
    que3.style.fontWeight = "400";
    collapseButton_3.style.transform = "rotateX(180deg)";
  } else {
    que3.style.fontWeight = "200";
    collapseCard_3.style.display = "none";
    que3.style.color = " hsl(240, 6%, 50%)";
    collapseButton_3.style.transform = "rotateX(360deg)";
  }
};

collapseButton_3.addEventListener("click", collapseCard3);

const collapseCard4 = () => {
  if (collapseCard_4.style.display === "none") {
    collapseCard_4.style.display = "block";
    que4.style.color = "hsl(238, 29%, 16%)";
    que4.style.fontWeight = "400";
    collapseButton_4.style.transform = "rotateX(180deg)";
  } else {
    collapseCard_4.style.display = "none";
    que4.style.fontWeight = "200";
    que4.style.color = " hsl(240, 6%, 50%)";
    collapseButton_4.style.transform = "rotateX(360deg)";
  }
};

collapseButton_4.addEventListener("click", collapseCard4);

const collapseCard5 = () => {
  if (collapseCard_5.style.display === "none") {
    collapseCard_5.style.fontWeight = "900";
    collapseCard_5.style.display = "block";
    que5.style.color = "hsl(238, 29%, 16%)";
    que5.style.fontWeight = "400";
    collapseButton_5.style.transform = "rotateX(180deg)";
  } else {
    collapseCard_5.style.display = "none";
    que5.style.fontWeight = "200";
    que5.style.color = " hsl(240, 6%, 50%)";
    collapseButton_5.style.transform = "rotateX(360deg)";
  }
};

collapseButton_5.addEventListener("click", collapseCard5);

// method two
// looping through all the button and the collapsble card the add event listener to trigger a function that collapses or closes the cards

// select elements


// for ( let i = 0; i < collapseBtns.length; i++) {
//     collapseBtns[i].addEventListener('click' , function (){
//         for ( let i = 0 ; i < hiddenAnswers.length ; i++) {
//             hiddenAnswers[i].style.display = 'block';
//             collapseBtns[i].style.transform = "rotateX(180deg)";

//             let showAccordion = collapseBtns[i].classList.toggle("shows");
//             if ( showAccordion ) {
//                 hiddenAnswers[i].style.display = 'none';
//             }
//         }
//     }
// )}
