const mongoose = require('mongoose');

const LeadSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    companyName: { type: String, default: 'Individual / Not Specified' },
    domain: { type: String, default: 'General Corporate Upskilling' },
    numberOfCandidates: { type: String, default: '1-10 Candidates' },
    modeOfDelivery: { type: String, default: 'Live Virtual Online' },
    location: { type: String, default: 'India' },
    createdAt: { type: Date, default: Date.now }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Lead', LeadSchema);
