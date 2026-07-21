const express = require('express');
const router = express.Router();

const faqData = [
  {
    id: 1,
    category: 'About the Course',
    question: 'Who is this program designed for?',
    answer: 'It is created for professionals who need practical upskilling in modern business delivery and want a structured way to gain measurable capability.'
  },
  {
    id: 2,
    category: 'About the Course',
    question: 'How long does the experience last?',
    answer: 'The format is flexible and can be adapted to your team schedule, whether you want a short intensive sprint or a broader learning rhythm.'
  },
  {
    id: 3,
    category: 'About the Delivery',
    question: 'Do you tailor the experience to our organization?',
    answer: 'Yes. We map the training to your context, goals, and audience so the learning feels relevant rather than generic.'
  },
  {
    id: 4,
    category: 'About the Delivery',
    question: 'What support is available after sessions?',
    answer: 'Participants receive resource guides, office hours access, and follow-up support to keep momentum after the live delivery ends.'
  },
  {
    id: 5,
    category: 'Misc',
    question: 'Can we run this for multiple regions?',
    answer: 'Yes. We support hybrid and distributed delivery formats so teams in different locations can participate together.'
  }
];

router.get('/', (req, res) => {
  res.json({ items: faqData });
});

module.exports = router;
