import { Router } from "express";
import Story from "../models/Prompt.js";

const router = Router();

// Create story route
router.post("/", async (request, response) => {
  try {
    const newStory = new Story(request.body);

    const data = await newStory.save();

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    if ("name" in error && error.name === "ValidationError")
      return response.status(400).json(error.errors);

    return response.status(500).json(error.errors);
  }
});

// Get all prompts route
router.get("/", async (request, response) => {
  try {
    // Store the query params into a JavaScript Object
    const query = request.query; // Defaults to an empty object {}

    const data = await Story.find(query);

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

// Get a single prompt by ID
router.get("/:id", async (request, response) => {
  try {
    const data = await Story.findById(request.params.id);

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

// Delete a prompt by ID
router.delete("/:id", async (request, response) => {
  try {
    const data = await Story.findByIdAndRemove(request.params.id, {});

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

// Update a single prompt by ID
router.put("/:id", async (request, response) => {
  try {
    const body = request.body;

    const data = await Story.findByIdAndUpdate(
      request.params.id,
      {
        //need to add form info here
        $set: {
          name: body.name,
          age: body.age,
          gender: body.gender,
          species: body.species,
          nationality: body.nationality,
          occupation: body.occupation,
          religion: body.religion,
          hair: body.hair,
          eye: body.eye,
          bio: body.bio,
          chapter: body.chapter,
          summary: body.summary,
          noteTitle: body.noteTitle,
          note: body.note
        }
      },
      {
        new: true
      }
    );

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    if ("name" in error && error.name === "ValidationError")
      return response.status(400).json(error.errors);

    return response.status(500).json(error.errors);
  }
});

export default router;
