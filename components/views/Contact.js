import html from "html-literal";

export default () => html`
  <div class="headerGrid">
    <div id="smallHeader"></div>
  </div>

  <div class="centeredContent">
    <div class="centeredBlack">
      <div class="contactForm">
        <form
          id="fs-frm"
          name="simple-contact-form"
          accept-charset="utf-8"
          action="https://formspree.io/f/mnqkeozk"
          method="post"
        >
          <fieldset id="fs-frm-inputs">
            <div class="blueDiv">
              <h3 id="contactMe">Contact Me</h3>
            </div>

            <br />
            <br />

            <label for="full-name" class="fHeadings">Full Name</label>

            <br />
            <br />
            <input
              type="text"
              name="name"
              id="fName"
              class="fFields"
              placeholder="First and Last"
              required=""
            />

            <br />
            <br />
            <br />

            <label for="email-address" class="fHeadings">Email Address</label>
            <br />
            <br />
            <input
              type="email"
              class="fFields"
              name="_replyto"
              id="email-address"
              placeholder="email@domain.tld"
              required=""
            />

            <br />
            <br />
            <br />

            <label for="message" class="fHeadings">Message</label>

            <br />
            <br />

            <textarea
              rows="5"
              name="message"
              class="fFields"
              id="message"
              placeholder="Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla nullam quis risus."
              required=""
            ></textarea>
            <input
              type="hidden"
              name="_subject"
              id="email-subject"
              value="Contact Form Submission"
            />

            <br />
            <br />

            <input type="submit" id="buttonS" value="Submit" />
            <br />
            <br />
          </fieldset>
        </form>

        <a
          href="https://www.linkedin.com/in/madori-solomon-aba4a3186/"
          class="fa-brands fa-linkedin"
        ></a>
        <a href="https://github.com/msolomon25" class="fa-brands fa-github"></a>

        <!-- Include links to socials and a photo of myself -->
      </div>
    </div>
  </div>
`;
