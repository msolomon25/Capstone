import mongoose from "mongoose";

//add form info
const storiesSchema = new mongoose.Schema({
  name: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },

  age: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },

  gender: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },

  species: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },

  nationality: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },

  occupation: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },

  religion: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },

  hairColor: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },

  eyeColor: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },

  bio: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },

  chapterTitle: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },

  chapterSummary: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },

  noteTitle: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },

  note: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },

  info: { type: mongoose.Schema.Types.ObjectId, ref: "Story" }
});

const Story = mongoose.model("Story", storiesSchema);

export default Story;
