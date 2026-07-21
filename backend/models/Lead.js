const mongoose = require('mongoose');

const LeadSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    companyName: { type: String, required: true },
    domain: { type: String, required: true },
    numberOfCandidates: { type: String, required: true },
    modeOfDelivery: { type: String, required: true },
    location: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Lead', LeadSchema);
