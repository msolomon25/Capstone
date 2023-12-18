import html from "html-literal";

export default () => html`
<div class = "headerGrid">

<div id = "smallHeader"> </div>


</div>

<div class="centeredContent">

<div class="centered">

  <h3 id="contactMe">Contact Me</h3>

  <div class="contactForm">

    <form action="https://formspree.io/f/mnqkeozk" method="POST">



      <label for="name">Name:</label>
      <br>
      <input type="text" name="name" id="name" placeholder="Full Name" />
      <br>
      <br>

      <label for="email">Email:</label>
      <br>
      <input type="email" name="email" id="email" placeholder="you@somewhere.com" />
      <br>
      <br>

      <label for="phone">Phone:</label>
      <br>
      <input type="tel" name="phone" id="phone" placeholder="555-555-5555" />
      <br>
      <br>

        <label for="msg">Subject:</label>
        <br>
        <textarea name="message" id="msg" cols="30" rows="10"></textarea>


      <br>

      <div>
        <h5>What's this message about?</h5>
        <div>
          <input
            type="radio"
            name="subject"
            value="professional"
            id="pro"
            checked
          />
          <label for="pro">I'd like to hire you!</label>
        </div>
        <div>
          <input type="radio" name="subject" value="personal" id="personal" />
          <label for="personal">Personal message</label>
        </div>
        <div>
          <input type="radio" name="subject" value="other" />
          <label>Don't know/something else</label>
        </div>
      </div>


  </div>
  <br>


      <input type="submit" value="Submit" id = "buttonS" />
    </form>

    <!-- Include links to socials and a photo of myself -->
  </div>
</div>`
