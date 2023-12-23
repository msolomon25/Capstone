import html from "html-literal";

export default (state) => html`
 <header style="height: 10px; background-color: var(--highlight-color);">
 <h1>${state.header}</h1>
</header>`;

//header might cause design issue
