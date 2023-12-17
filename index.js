// document.querySelector(".fa-bars").addEventListener("click", () => {
//   document.querySelector("nav > a").classList.toggle("hidden--mobile");
// });




function openSection(evt, tabType) {
  var i, tabContent, tabs;

  tabContent = document.getElementsByClassName("tabContent");
  for(i = 0; i < tabContent.length; i++){
    tabContent[i].style.display = "none";
  }

  tabs = document.getElementsByClassName("tabs");
  for (i = 0; i < tabs.length; i++) {
    tabs[i].className = tabs[i].className.replace(" active", "");
  }

  document.getElementById(tabType).style.display = "block";
  evt.currentTarget.className += " active";

}




// function toggleMenu() {
//   var nav = document.getElementsByClassName("hamburgerMenu");
//   if (nav.style.display === "block") {
//     nav.style.display = "none";
//   } else {
//     nav.style.display = "block";
//   }
// }


const hamburgerMenu = document.querySelector(".hamburgerMenu");
const navMenu = document.querySelector(".hiddenMobile");

hamburgerMenu.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburgerMenu.classList.toggle("active");
    navMenu.classList.toggle("active");
}
