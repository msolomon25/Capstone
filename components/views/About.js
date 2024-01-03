import html from "html-literal";
import booksImg from "../../assets/img/booksImg.jpg";

export default () => html`



<div class = "headerGrid">

  <div id = "smallHeader"> </div>


 </div>

 <div class="centeredContent">

  <div class="centered">

    <h3 class="h3Padded">Why InkWizard?</h3>
<p>InkWizard is an app that I made based on my personal experiences. I grew up loving reading and would
often write my own short stories. As I got older and started writing longer and more complex stories I
began having trouble keeping up with all the little details and my stories declined in quality. I realized if I had a program to help me take notes and keep track of information my writing process would go
much smoother. InkWizard was my solution.
</p>
<div id ="writerPic">
      <img src=${booksImg} alt="Story Image" style="width:60%" style="height: 15%;">
    </div>

    </div>
  </div>



`
