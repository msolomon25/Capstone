import Navigo from "navigo";
import { capitalize } from "lodash";

import * as components from "./components";
import * as store from "./store";
import axios from "axios";

const router = new Navigo("/");

function render(state = store.Home) {
  document.querySelector("#root").innerHTML = `
    ${components.Nav(store.Links, state)}
    ${components.Main(state)}
  `;

  router.updatePageLinks();

  afterRender(state);
}

function afterRender(state) {
  if (state.view === "Story") {
    // Add an event handler for the submit button on the form
    document.querySelector("form").addEventListener("submit", event => {
      event.preventDefault();

      // Get the form element
      const inputList = event.target.elements;
      console.log("Input Element List", inputList);

      // Create a request body object to send to the API
      const requestData = {
        name: inputList.name.value,
        age: inputList.age.value,
        gender: inputList.gender.value,
        species: inputList.species.value,
        nationality: inputList.nationality.value,
        occupation: inputList.occupation.value,
        religion: inputList.religion.value,
        hair: inputList.hair.value,
        eye: inputList.eye.value,
        bio: inputList.bio.value,
        chapter: inputList.chapter.value,
        summary: inputList.summary.value,
        noteTitle: inputList.noteTitle.value,
        note: inputList.note.value
      };
      // Log the request body to the console
      console.log("request Body", requestData);

      axios
        // Make a POST request to the API to create a new pizza
        .post(`${process.env.STORY_API}/prompt`, requestData)
        .then(response => {
          //  Then push the new pizza onto the Pizza state pizzas attribute, so it can be displayed in the pizza list
          store.Story.stories.push(response.data);
          router.navigate("/Story");
        })
        // If there is an error log it to the console
        .catch(error => {
          console.log("It failed", error);
        });
    });
  }

  //hamburger menu
  document.querySelector(".fa-bars").addEventListener("click", () => {
    document.querySelector("nav > ul").classList.toggle("hidden--mobile");
  });

  //story page sidebar tabs
  function openSection(button, tabType) {
    var i, tabContent, tabs;

    tabContent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
    }

    tabs = document.getElementsByClassName("tabs");

    for (i = 0; i < tabs.length; i++) {
      tabs[i].className = (tabs[i].className + " ")
        .replace(" active ", "")
        .trim();
    }

    document.getElementById(tabType).style.display = "block";
    button.className += " active";

    // document.getElementById("defaultOpen").click();
  }

  try {
    document.querySelector("#tab1").addEventListener("click", () => {
      openSection(document.querySelector("#tab1"), "characters");
    });

    document.querySelector("#tab2").addEventListener("click", () => {
      openSection(document.querySelector("#tab2"), "chapters");
    });

    document.querySelector("#tab3").addEventListener("click", () => {
      openSection(document.querySelector("#tab3"), "notes");
    });
  } catch (err) {
    //Expected error that occurs when navigating to a page other than the story page
  }
}

router.hooks({
  before: (done, params) => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";

    // Add a switch case statement to handle multiple routes
    switch (view) {
      case "Home":
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&q=chicago`
          )
          .then(response => {
            // Convert Kelvin to Fahrenheit since OpenWeatherMap does provide otherwise
            const kelvinToFahrenheit = kelvinTemp =>
              Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);

            // Create an object to be stored in the Home state from the response
            store.Home.weather = {
              city: response.data.name,
              temp: kelvinToFahrenheit(response.data.main.temp),
              feelsLike: kelvinToFahrenheit(response.data.main.feels_like),
              description: response.data.weather[0].main
            };

            done();
          })
          .catch(err => {
            console.log(err);
            done();
          });
        break;
      default:
        done();
    }
  },
  already: params => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";

    render(store[view]);
  }
});

router
  .on({
    "/": () => render(),
    ":view": params => {
      let view = capitalize(params.data.view);
      render(store[view]);
    }
  })
  .resolve();

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

// https://zenquotes.io/api/today
