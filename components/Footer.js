import html from "html-literal";

import FooterLogo from "../assets/img/WInkLg.svg";

export default () => html`
  <footer>
    <img
      src=${FooterLogo}
      alt="InkWizard Logo"
      style="width:10%"
      id="bottomLogo"
    />
  </footer>
`;
