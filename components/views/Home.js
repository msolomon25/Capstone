import html from "html-literal";
import welcomeImage from "../../assets/img/WelToIw.svg";
import planImage from "../../assets/img/planImg.jpg";

export default (state) => html`
  <div class="headerGrid">
    <div id="lrgHeader"></div>

    <div id="headerSideBar">
      <img
        src=${welcomeImage}
        alt="InkWizard Welcome Logo"
        style="width:30%"
        id="welcomeLogo"
      />

      <h2 id="welcomeSH">We help you bring your stories to life!</h2>
    </div>
  </div>

  <div class="centeredContent">
    <div class="centered">
      <h3 class="h3Padded">Plan your story</h3>

      <p>
        Plan your story chapter by chapter and make it easy to keep track of
        important information!
      </p>


      <img src=${planImage} alt="Planning Image" style="width:40%" style="height: 15%;">


      <h3 class="h3Padded">Create dynamic characters</h3>

      <p>
        Add character profiles to flesh out your characters and keep track of
        things like personality traits, physical appearance, backstories ect.
      </p>

      <h3 class="h3Padded">Learn how to become a better writer</h3>

      <p>
        With InkWizard you get access to a wealth of resources and information.
        Make sure to check out our resource page!
      </p>

      <h3 class="h3Padded">Writing Prompt Generator</h3>
      <p>Having trouble with writer's block? Click the button below to get a one sentence writing prompt!
      </p>
      <button class="button" type="button">Click Me!</button>

      <h3 class="h3Padded">Today's weather</h3>

      <p>
    The weather in ${state.weather.city} is ${state.weather.description}. Temperature is ${state.weather.temp}F, and it feels like ${state.weather.feelsLike}F.
  </p>


    </div>
  </div>


`;
