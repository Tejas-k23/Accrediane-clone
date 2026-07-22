const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Lead = require('../models/Lead');
const { verifyAdminToken } = require('./admin');

// In-memory dummy leads fallback
let memoryLeads = [
  {
    _id: 'dummy_1',
    id: 1,
    name: 'Rahul Sharma',
    email: 'rahul.sharma@techcorp.com',
    phone: '+91 98765 43210',
    companyName: 'TechCorp Solutions',
    domain: 'Gen-AI & Data Engineering',
    numberOfCandidates: '25-50',
    modeOfDelivery: 'Hybrid (Live + Self-Paced)',
    location: 'Bengaluru, Karnataka',
    createdAt: new Date(Date.now() - 3600000 * 24 * 2).toISOString()
  },
  {
    _id: 'dummy_2',
    id: 2,
    name: 'Priya Verma',
    email: 'priya.v@analyticsglobal.in',
    phone: '+91 98123 45678',
    companyName: 'Analytics Global',
    domain: 'Product Strategy & Innovation',
    numberOfCandidates: '10-25',
    modeOfDelivery: 'Virtual Live Classroom',
    location: 'Gurugram, Haryana',
    createdAt: new Date(Date.now() - 3600000 * 12).toISOString()
  },
  {
    _id: 'dummy_3',
    id: 3,
    name: 'Ankit Patel',
    email: 'ankit@fintechplus.io',
    phone: '+91 97654 32109',
    companyName: 'Fintech Plus Labs',
    domain: 'Fintech Innovation',
    numberOfCandidates: '50+',
    modeOfDelivery: 'On-Premise Corporate Workshop',
    location: 'Mumbai, Maharashtra',
    createdAt: new Date(Date.now() - 3600000 * 3).toISOString()
  }
];

const connectDB = require('../db');

// POST /api/leads - Create new lead enquiry
router.post('/', async (req, res) => {
  const name = req.body?.name;
  const email = req.body?.email;
  const phone = req.body?.phone;
  const companyName = req.body?.companyName || req.body?.company || 'Individual / Not Specified';
  const domain = req.body?.domain || 'General Corporate Upskilling';
  const numberOfCandidates = req.body?.numberOfCandidates || req.body?.candidates || '1-10 Candidates';
  const modeOfDelivery = req.body?.modeOfDelivery || req.body?.deliveryMode || 'Live Virtual Online';
  const location = req.body?.location || 'India';

  if (!name || !email || !phone) {
    return res.status(400).json({ success: false, message: 'Name, email, and phone number are required.' });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ success: false, message: 'Please provide a valid email address.' });
  }

  const leadData = {
    name,
    email,
    phone,
    companyName,
    domain,
    numberOfCandidates,
    modeOfDelivery,
    location
  };

  try {
    await connectDB();
    const newLead = new Lead(leadData);
    const savedLead = await newLead.save();
    console.log('Successfully saved enquiry to MongoDB:', savedLead._id);
    return res.status(201).json({ success: true, message: 'Enquiry submitted successfully.', lead: savedLead });
  } catch (err) {
    console.warn('MongoDB save warning, storing in memory fallback:', err.message);
    const savedLead = {
      _id: `mem_${Date.now()}`,
      id: Date.now(),
      ...leadData,
      createdAt: new Date().toISOString()
    };
    memoryLeads.unshift(savedLead);
    return res.status(201).json({ success: true, message: 'Enquiry submitted successfully.', lead: savedLead });
  }
});

// GET /api/leads - Retrieve all received leads (Requires Admin Token)
router.get('/', verifyAdminToken, async (req, res) => {
  try {
    await connectDB();
    const mongoLeads = await Lead.find().sort({ createdAt: -1 });
    const allLeads = mongoLeads.length > 0 ? mongoLeads : memoryLeads;
    return res.json({ success: true, count: allLeads.length, leads: allLeads });
  } catch (err) {
    console.error('Fetch Leads Error:', err.message);
    return res.json({ success: true, count: memoryLeads.length, leads: memoryLeads });
  }
});

module.exports = router;
