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

  //carousel

  const prev = document.getElementById("prev-btn");
  const next = document.getElementById("next-btn");
  const list = document.getElementById("item-list");
  const itemWidth = 400;
  const padding = 20;

  prev.addEventListener("click", () => {
    list.scrollLeft -= itemWidth + padding;
  });
  next.addEventListener("click", () => {
    list.scrollLeft += itemWidth + padding;
  });


  // =======================================

  if (state.view === "Home") {
    // Do this stuff
    document.getElementById("callToAction").addEventListener("click", event => {
      event.preventDefault();

      router.navigate("/story");
    });
  }

  if (state.view === "Story") {
    // Add an event handler for the submit button on the form
    document.querySelector("form").addEventListener("submit", event => {
      event.preventDefault();

      // Get the form element
      const inputList = event.target.elements;
      console.log("Input Element List", inputList);
      console.log(inputList.chapter);
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
          store.Story.prompts.push(response.data);
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
            `https://api.wordnik.com/v4/words.json/wordOfTheDay?api_key=${process.env.WORDNIK_API_KEY}`
          )
          .then(response => {
            // Create an object to be stored in the Home state from the response
            store.Home.dailyWord = {
              word: response.data.word,
              note: response.data.note,
              text: response.data.definitions
            };
            console.log(response.data);

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
