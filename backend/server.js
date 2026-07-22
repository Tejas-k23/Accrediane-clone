const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Universal CORS & Preflight OPTIONS Middleware for Vercel & Cross-Origin requests
app.use((req, res, next) => {
  const origin = req.headers.origin || '*';
  res.setHeader('Access-Control-Allow-Origin', origin);
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With, Accept, Origin');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  next();
});

const corsOptions = {
  origin: true,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept', 'Origin']
};
app.use(cors(corsOptions));
app.use(express.json());

// Configure DNS servers fallback for mongodb+srv DNS resolution on Windows/Node environments
const dns = require('dns');
if (process.env.MONGO_URI && process.env.MONGO_URI.startsWith('mongodb+srv://')) {
  try {
    dns.setServers(['8.8.8.8', '1.1.1.1']);
  } catch (dnsErr) {
    console.warn('Custom DNS setServers warning:', dnsErr.message);
  }
}

// Connect to MongoDB database
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/accredian';
mongoose
  .connect(mongoURI, {
    serverSelectionTimeoutMS: 8000
  })
  .then(() => console.log('Successfully connected to MongoDB database.'))
  .catch((err) => {
    console.warn('MongoDB connection warning:', err.message);
    console.warn('Backend running with in-memory & dummy data fallbacks.');
  });

mongoose.connection.on('connected', () => {
  console.log('MongoDB Mongoose connection active.');
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB Mongoose error:', err.message);
});

app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    dbStatus: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
    mongoHost: mongoose.connection.host || null
  });
});

app.use('/api/admin', require('./routes/admin').router);
app.use('/api/faq', require('./routes/faq'));
app.use('/api/testimonials', require('./routes/testimonials'));
app.use('/api/leads', require('./routes/leads'));

app.listen(PORT, () => {
  console.log(`Backend server listening on port ${PORT}`);
});
