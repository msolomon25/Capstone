import html from "html-literal";

export default (links) => html`
  <nav class = "topNav" style="height; 60px">
    <img src="iWLogo.svg" alt="InkWizard Logo" style="width:10%" id="logo">

<ul class="hiddenMobile nav-links">
      ${links
        .map(
          (link) =>
            `<li><a href="/${link.title}" title="${link.title}" data-navigo>${link.text}</a></li>`
        )
        .join("")}
    </ul>







<a href="javascript:void(0);" class="hMenu" onclick="toggleMenu()">

<i class="fa-solid fa-bars" style="font-size: 200%;"></i>

</a>




</nav>
`;
