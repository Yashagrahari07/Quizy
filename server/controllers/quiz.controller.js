import Quiz from '../models/quiz.model.js';
import { generateUniqueUrl, generateQrCode } from '../utils/quizUtils.js';
import { getQuote } from '../utils/gptUtils.js';

export const createQuiz = async (req, res) => {
  try {
    const { title, questions, settings } = req.body;
    const createdBy = req.user.id;
    const url = generateUniqueUrl();
    const qrCode = await generateQrCode(url);

    const newQuiz = new Quiz({
      title,
      createdBy,
      questions,
      settings,
      url,
      qrCode
    });

    await newQuiz.save();
    res.status(201).json({ quiz: newQuiz });
  } catch (error) {
    res.status(500).json({ error: 'Error creating quiz' });
  }
};

export const getQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.findOne({ url: req.params.url });
    if (!quiz) {
      return res.status(404).json({ error: 'Quiz not found' });
    }
    res.status(200).json({ quiz });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching quiz' });
  }
};

export const submitQuiz = async (req, res) => {
  try {
    const { name, answers } = req.body;
    const quiz = await Quiz.findOne({ url: req.params.url });
    if (!quiz) {
      return res.status(404).json({ error: 'Quiz not found' });
    }

    let score = 0;
    let correctAnswers = 0;
    let incorrectAnswers = 0;

    quiz.questions.forEach((question, index) => {
      if (question.correctAnswer === answers[index]) {
        score += 1;
        correctAnswers += 1;
      } else {
        incorrectAnswers += 1;
      }
    });

    const quote = await getQuote();
    const participant = {
      name,
      dp: `https://randomuser.me/api/portraits/lego/${Math.floor(Math.random() * 10)}.jpg`,
      score,
      correctAnswers,
      incorrectAnswers,
      quote
    };

    quiz.participants.push(participant);
    await quiz.save();

    res.status(200).json({ participant });
  } catch (error) {
    res.status(500).json({ error: 'Error submitting quiz' });
  }
};

export const getQuizResults = async (req, res) => {
  try {
    const quiz = await Quiz.findOne({ url: req.params.url });
    if (!quiz) {
      return res.status(404).json({ error: 'Quiz not found' });
    }
    res.status(200).json({ participants: quiz.participants });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching quiz results' });
  }
};
