import html from "html-literal";

export default state => html`
  <div class="headerGrid">
    <div id="smallHeader"></div>
  </div>

  <div class="centeredContent">
    <div class="centered">
      <h3 class="h3Padded">Welcome to the Story Page!</h3>
      <p>Click the tabs on the right to add info about your story!</p>
    </div>
  </div>

  <div id="storyPgGrid">
    <div class="storySidebar">
      <button class="tabs active-content" id="tab1">Characters</button>

      <button class="tabs" id="tab2">
        Chapters
      </button>

      <button class="tabs" id="tab3">
        Notes
      </button>
    </div>

    <!-- Character Page -->
    <div id="characters" class="tabContent">
      <h3>Character Profiles</h3>

      <label for="name">Name:</label>
      <br />
      <input type="text" name="name" id="name" placeholder="Full Name" />
      <br />

      <label for="name">Age:</label>
      <br />
      <input type="text" name="age" id="age" placeholder="Age" />
      <br />

      <label for="name">Gender:</label>
      <br />
      <input type="text" name="gender" id="gender" placeholder="Gender" />
      <br />

      <label for="name">Species:</label>
      <br />
      <input type="text" name="Species" id="Species" placeholder="Species" />
      <br />

      <label for="name">Nationality:</label>
      <br />
      <input
        type="text"
        name="Nationality"
        id="Nationality"
        placeholder="Nationality"
      />
      <br />

      <label for="name">Occupation:</label>
      <br />
      <input
        type="text"
        name="Occupation"
        id="Occupation"
        placeholder="Occupation"
      />
      <br />

      <label for="name">Religion:</label>
      <br />
      <input type="text" name="Religion" id="Religion" placeholder="Religion" />
      <br />

      <label for="name">Hair Color:</label>
      <br />
      <input type="text" name="Hair" id="Hair" placeholder="Hair Color" />
      <br />

      <label for="name">Eye Color:</label>
      <br />
      <input type="text" name="Eye" id="Eye" placeholder="Eye Color" />
      <br />

      <label for="name">Bio</label>
      <br />
      <textarea name="bio" id="bio" cols="40" rows="15"></textarea>

      <input type="submit" value="Submit" id="buttonS" />

      <hr width="100%" size="9" color="#f2f2f2" />

      <!-- Add storage area here -->
    </div>

    <!-- Chapters Page -->
    <div id="chapters" class="tabContent">
      <h3>Create A New Chapter Summary</h3>

      <label for="name">Chapter Title:</label>
      <br />
      <input
        type="text"
        name="chapterTitle"
        id="chapterTitle"
        placeholder="Chapter Title"
      />
      <br />

      <label for="name">Summary:</label>
      <br />
      <textarea name="bio" id="bio" cols="40" rows="15"></textarea>

      <input type="submit" value="Submit" id="buttonS" />
      <br />
      <br />

      <hr width="100%" size="9" color="#f2f2f2" />

      <h3>Chapter Summaries</h3>

      Add storage area here
    </div>

    <!-- Notes Page -->
    <div id="notes" class="tabContent">
      <h3>Create A New Note</h3>

      <label for="name">Chapter Title:</label>
      <br />
      <input
        type="text"
        name="chapterTitle"
        id="chapterTitle"
        placeholder="Chapter Title"
      />
      <br />

      <label for="name">Summary:</label>
      <br />
      <textarea name="bio" id="bio2" cols="40" rows="15"></textarea>

      <input type="submit" value="Submit" id="buttonS" />
      <br />
      <br />

      <hr width="100%" size="9" color="#f2f2f2" />

      <h3>Notes</h3>
      <!-- Add storage area here -->
    </div>
  </div>
`;
