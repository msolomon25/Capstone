import html from "html-literal";

export default (links) => html`
  <nav class = "topNav" style="height; 60px">
    <img src="iWLogo.svg" alt="InkWizard Logo" style="width:10%" id="logo">

<div class="hiddenMobile nav-links">
      ${links
        .map(
          link =>
            `<a href="/${link.title}" title="${link.title}" data-navigo>${link.text}</a>`
        )
        .join("")}
    </div>







<a href="javascript:void(0);" class="hMenu" onclick="toggleMenu()">

<i class="fa-solid fa-bars" style="font-size: 200%;"></i>

</a>




</nav>
`;
