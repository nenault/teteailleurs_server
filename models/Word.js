const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const wordSchema = new Schema({
  arabic: String,
  google: String,
  latin: String,
  french: String,
  type: {
    type: String,
    enum: [
      "Mot",
      "Expression",
    ],
    default: "Mot",
  },
  sentence: {
    type: Schema.Types.ObjectId,
    ref: "Sentence",
  },
  isVerb: {
    type: Boolean,
    default: false,
  },
});

const Word = mongoose.model("Word", wordSchema);

module.exports = Word;
