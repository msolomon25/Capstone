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

    <form id="characterForm" method="POST" action="">
      <!-- Character Page -->
      <div id="characters" class="tabContent">
        <h3>Character Profiles</h3>

        <label for="name">Name:</label>
        <br />
        <input type="text" name="name" id="name" class="chInfo" placeholder="Full Name" />
        <br />

        <label for="age">Age:</label>
        <br />
        <input type="text" name="age" id="age" class="chInfo" placeholder="Age" />
        <br />

        <label for="gender">Gender:</label>
        <br />
        <input type="text" name="gender" id="gender" class="chInfo" placeholder="Gender" />
        <br />

        <label for="species">Species:</label>
        <br />
        <input type="text" name="species" id="species" class="chInfo" placeholder="Species" />
        <br />

        <label for="nationality">Nationality:</label>
        <br />
        <input
          type="text"
          class="chInfo"
          name="nationality"
          id="nationality"
          placeholder="Nationality"
        />
        <br />

        <label for="occupation">Occupation:</label>
        <br />
        <input
          type="text"
          name="occupation"
          id="occupation"
          placeholder="Occupation"
          class="chInfo"
        />
        <br />

        <label for="religion">Religion:</label>
        <br />
        <input
          type="text"
          name="religion"
          id="religion"
          placeholder="Religion"
          class="chInfo"
        />
        <br />

        <label for="hair">Hair Color:</label>
        <br />
        <input type="text" name="hair" id="hair" placeholder="Hair Color" class="chInfo" />
        <br />

        <label for="eye">Eye Color:</label>
        <br />
        <input type="text" name="eye" id="eye" placeholder="Eye Color" class="chInfo" />
        <br />

        <label for="bio">Bio</label>
        <br />
        <textarea name="bio" id="bio" cols="40" rows="15"></textarea>

        <input type="submit" value="Submit" class="buttonL" />

        <hr width="100%" size="9" color="#f2f2f2" />

        <h3>Characters</h3>

        <div class="tableScroll">

        <table id="characterTable">

          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Species</th>
            <th>Nationality</th>
            <th>Occupation</th>
            <th>Religion</th>
            <th>Hair-Color</th>
            <th>Eye-Color</th>
            <th>Bio</th>
          </tr>

          ${state.prompts
            .map(prompt => {
              return `<tr><td>${prompt.name}</td><td>${prompt.age}</td><td>${prompt.gender}</td><td>${prompt.species}</td>
            <td>${prompt.nationality}</td><td>${prompt.occupation}</td><td>${prompt.religion}</td><td>${prompt.hair}</td>
            <td>${prompt.eye}</td><td>${prompt.bio}</td></tr>`;
            })
            .join("")}
        </table>

        </div>

      </div>

      <!-- Chapters Page -->

      <div id="chapters" class="tabContent">
        <h3>Create A New Chapter Summary</h3>

        <label for="chapter">Chapter Title:</label>
        <br />
        <input
          type="text"
          name="chapter"
          id="chapter"
          placeholder="Chapter Title"
        />
        <br />

        <label for="summary">Summary:</label>
        <br />
        <textarea name="summary" id="summary" cols="40" rows="15"></textarea>

        <input type="submit" value="Submit" class="buttonL" />
        <br />
        <br />

        <hr width="100%" size="9" color="#f2f2f2" />

        <h3>Chapter Summaries</h3>

        <div class="tableScroll">

        <table id="chapterTable">
          <tr>
            <th>Chapter Title</th>
            <th>Summary</th>
          </tr>
          ${state.prompts
            .map(prompt => {
              return `<tr><td>${prompt.chapter}</td><td>${prompt.summary}</td></tr>`;
            })
            .join("")}
        </table>
          </div>
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

        <input type="submit" value="Submit" class="buttonL" />
        <br />
        <br />

        <hr width="100%" size="9" color="#f2f2f2" />

        <h3>Notes</h3>

        <div class="tableScroll">
        <table id="chapterTable">
          <tr>
            <th>Note Title</th>
            <th>Note</th>
          </tr>
          ${state.prompts
            .map(prompt => {
              return `<tr><td>${prompt.noteTitle}</td><td>${prompt.note}</td></tr>`;
            })
            .join("")}
        </table>
          </div>
      </div>
    </form>
  </div>
`;
