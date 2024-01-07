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

      <form id="characterForm" method="POST" action="">
        <label for="characterName">Name:</label>
        <br />
        <input type="text" name="name" id="name" placeholder="Full Name" />
        <br />

        <label for="characterAge">Age:</label>
        <br />
        <input type="text" name="age" id="age" placeholder="Age" />
        <br />

        <label for="characterGender">Gender:</label>
        <br />
        <input type="text" name="gender" id="gender" placeholder="Gender" />
        <br />

        <label for="characterSpecies">Species:</label>
        <br />
        <input type="text" name="Species" id="Species" placeholder="Species" />
        <br />

        <label for="characterNationality">Nationality:</label>
        <br />
        <input
          type="text"
          name="Nationality"
          id="Nationality"
          placeholder="Nationality"
        />
        <br />

        <label for="characterOccupation">Occupation:</label>
        <br />
        <input
          type="text"
          name="Occupation"
          id="Occupation"
          placeholder="Occupation"
        />
        <br />

        <label for="characterReligion">Religion:</label>
        <br />
        <input
          type="text"
          name="Religion"
          id="Religion"
          placeholder="Religion"
        />
        <br />

        <label for="characterHair">Hair Color:</label>
        <br />
        <input type="text" name="Hair" id="Hair" placeholder="Hair Color" />
        <br />

        <label for="characterEye">Eye Color:</label>
        <br />
        <input type="text" name="Eye" id="Eye" placeholder="Eye Color" />
        <br />

        <label for="characterBio">Bio</label>
        <br />
        <textarea name="bio" id="bio" cols="40" rows="15"></textarea>

        <input type="submit" value="Submit" id="buttonS" />

        <hr width="100%" size="9" color="#f2f2f2" />
      </form>

      <table id="characterTable">
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Species</th>
          <th>Nationality</th>
        </tr>
        ${state.prompts
          .map(prompt => {
            return `<tr><td>${prompt.character}</td><td>${prompt.age}</td><td>${prompt.gender}</td><td>${prompt.species}</td>
            <td>${prompt.nationality}</td></tr>`;
          })
          .join("")}
      </table>
    </div>

    <!-- Chapters Page -->
    <div id="chapters" class="tabContent">
      <h3>Create A New Chapter Summary</h3>

      <label for="chapterTitle">Chapter Title:</label>
      <br />
      <input
        type="text"
        name="chapterTitle"
        id="chapterTitle"
        placeholder="Chapter Title"
      />
      <br />

      <label for="chapterSummary">Summary:</label>
      <br />
      <textarea name="summary" id="summary" cols="40" rows="15"></textarea>

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

      <label for="noteTitle">Note Title:</label>
      <br />
      <input
        type="text"
        name="noteTitle"
        id="noteTitle"
        placeholder="Note Title"
      />
      <br />

      <label for="note">Note:</label>
      <br />
      <textarea name="note" id="note" cols="40" rows="15"></textarea>

      <input type="submit" value="Submit" id="buttonS" />
      <br />
      <br />

      <hr width="100%" size="9" color="#f2f2f2" />

      <h3>Notes</h3>
      <!-- Add storage area here -->
    </div>
  </div>
`;
