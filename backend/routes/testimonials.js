const express = require('express');
const router = express.Router();

const testimonials = [
  {
    id: 1,
    company: 'Northstar Labs',
    quote: 'The program helped our team translate learning into stronger delivery habits almost immediately.',
    role: 'People Operations Lead'
  },
  {
    id: 2,
    company: 'Brightlane',
    quote: 'We appreciated the practical structure and the way the sessions stayed relevant to our daily work.',
    role: 'Transformation Director'
  },
  {
    id: 3,
    company: 'Apex Ventures',
    quote: 'The experience felt polished, measurable, and genuinely useful for our leadership group.',
    role: 'HR Business Partner'
  }
];

router.get('/', (req, res) => {
  res.json({ items: testimonials });
});

module.exports = router;
