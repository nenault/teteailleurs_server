const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sentenceSchema = new Schema({
  arabic: String,
  google: String,
  latin: String,
  latin2: String,
  french: String,
  isDone: {
    type: Boolean,
    default: false,
  },
  words: [
    {
      word: {
        type: Schema.Types.ObjectId,
        ref: "Word",
        default: null,
      },
    },
  ],
});

const Sentence = mongoose.model("Sentence", sentenceSchema);

module.exports = Sentence;
