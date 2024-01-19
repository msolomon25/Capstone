import html from "html-literal";
import welcomeImage from "../../assets/img/WelToIw.svg";
import planImage from "../../assets/img/planImg.jpg";

export default state => html`
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

      <a id="callToAction">Get Started</a>

    </div>
  </div>

  <div class="centeredContent">
    <div class="centered">
      <div class="blackDiv">
        <h3 class="whiteBold">Word of the Day</h3>

        <h1 id="dailyWord">${state.dailyWord.word}</h1>

        <p class="whiteBC">
          ${state.dailyWord.note}
        </p>

        <br />
        <hr width="50%" size="9" color="#2AD9E6" />
        <br />

        <h3 class="whiteBoldTwo">Definitions</h3>

        <p class="whiteBC">
          ${state.dailyWord.text[0].text}
        </p>
      </div>

      <h3 class="h3Padded">Plan your story</h3>

      <p>
        Plan your story chapter by chapter and make it easy to keep track of
        important information!
      </p>

      <div class="container">
        <div class="carousel-view">

          <!-- List Container -->
          <div id="item-list" class="item-list">
            <!-- Items -->
            <img id="item" class="item" src="https://images.pexels.com/photos/261763/pexels-photo-261763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <img id="item" class="item" src="https://images.pexels.com/photos/372748/pexels-photo-372748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <img id="item" class="item" src="https://images.pexels.com/photos/831430/pexels-photo-831430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          </div>


          <button id="prev-btn" class="prev-btn fa-regular fa-circle-left"></button>
          <button id="next-btn" class="next-btn fa-regular fa-circle-right"></button>
        </div>
      </div>

      <!-- <img
        src=${planImage}
        alt="Planning Image"
        style="width:40%"
        style="height: 15%;"
      /> -->

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


    </div>
  </div>
`;
