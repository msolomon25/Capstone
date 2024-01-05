import mongoose from 'mongoose';

const promptSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  }
});

const Prompt = mongoose.model("Prompt", promptSchema);

export default Prompt;
