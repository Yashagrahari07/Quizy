import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({
  question: String,
  options: [String],
  correctAnswer: String,
  image: String
});

const quizSchema = new mongoose.Schema({
  title: String,
  createdBy: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  questions: [questionSchema],
  settings: {
    timer: Number,
    numberOfQuestions: Number
  },
  url: String,
  qrCode: String,
  participants: [{
    name: String,
    dp: String,
    score: Number,
    correctAnswers: Number,
    incorrectAnswers: Number,
    quote: String
  }]
}, { timestamps: true });

const Quiz = mongoose.model('Quiz', quizSchema);

export default Quiz;
