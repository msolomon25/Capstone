import { Header, Nav, Main, Footer } from "./components";

import * as store from "./store";

import Navigo from "navigo";
import { capitalize } from "lodash";

const router = new Navigo("/");

function render(state = store.Home) {
  document.querySelector("#root").innerHTML = `
    ${Header(state)}
    ${Nav(store.Links)}
    ${Main(state)}
    ${Footer()}
  `;

  router.updatePageLinks();
}

router
.on({
  "/": () => render(),
  ":view": (params) => {
    let view = capitalize(params.data.view);
    if (view in store) {
      render(store[view]);
    } else {
      render(store.Home);
      console.log(`View ${view} not defined`);
    }
  },
})
.resolve();

















// document.querySelector(".fa-bars").addEventListener("click", () => {
//   document.querySelector("nav > a").classList.toggle("hidden--mobile");
// });




// function openSection(evt, tabType) {
//   var i, tabContent, tabs;

//   tabContent = document.getElementsByClassName("tabContent");
//   for(i = 0; i < tabContent.length; i++){
//     tabContent[i].style.display = "none";
//   }

//   tabs = document.getElementsByClassName("tabs");
//   for (i = 0; i < tabs.length; i++) {
//     tabs[i].className = tabs[i].className.replace(" active", "");
//   }

//   document.getElementById(tabType).style.display = "block";
//   evt.currentTarget.className += " active";

// }



// Not working
// function toggleMenu() {
//   var nav = document.getElementsByClassName("hamburgerMenu");
//   if (nav.style.display === "block") {
//     nav.style.display = "none";
//   } else {
//     nav.style.display = "block";
//   }
// }


// const hamburgerMenu = document.querySelector(".hamburgerMenu");
// const navMenu = document.querySelector(".hiddenMobile");

// hamburgerMenu.addEventListener("click", mobileMenu);

// function mobileMenu() {
//     hamburgerMenu.classList.toggle("active");
//     navMenu.classList.toggle("active");
// }
