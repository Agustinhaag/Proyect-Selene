import mongoose from "mongoose";

const pollSchema = new mongoose.Schema({
    question: { type: String, required: true },
    options: [{ text: String, votes: { type: Number, default: 0 } }],
});
export default mongoose.model('Poll', pollSchema);
