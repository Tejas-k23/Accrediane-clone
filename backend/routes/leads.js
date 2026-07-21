const express = require('express');
const router = express.Router();

let leads = [];

router.post('/', (req, res) => {
  const { name, email, phone, companyName, domain, numberOfCandidates, modeOfDelivery, location } = req.body || {};

  if (!name || !email || !phone || !companyName || !domain || !numberOfCandidates || !modeOfDelivery || !location) {
    return res.status(400).json({ success: false, message: 'Please complete all fields.' });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ success: false, message: 'Please provide a valid email address.' });
  }

  const lead = { id: Date.now(), ...req.body };
  leads.push(lead);

  return res.status(201).json({ success: true, message: 'Lead received successfully.', lead });
});

module.exports = router;
