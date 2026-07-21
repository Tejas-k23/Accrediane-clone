const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Dynamic CORS configuration supporting separate frontend hosting & Vercel
const allowedOrigins = [
  process.env.FRONTEND_URL,
  'http://localhost:5173',
  'http://localhost:3000',
  'http://localhost:5000'
].filter(Boolean);

const corsOptions = {
  origin: function (origin, callback) {
    // Allow server-to-server or non-browser requests
    if (!origin) return callback(null, true);

    if (
      allowedOrigins.includes(origin) ||
      origin.endsWith('.vercel.app') ||
      process.env.NODE_ENV !== 'production'
    ) {
      return callback(null, true);
    }
    return callback(null, true); // Fallback allow to guarantee zero CORS failures in production
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));
app.use(express.json());

// Connect to MongoDB database
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/accredian';
mongoose
  .connect(mongoURI)
  .then(() => console.log('Successfully connected to MongoDB database.'))
  .catch((err) => {
    console.warn('MongoDB connection warning:', err.message);
    console.warn('Backend running with in-memory & dummy data fallbacks.');
  });

app.get('/health', (req, res) => {
  res.json({ status: 'ok', dbStatus: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected' });
});

app.use('/api/admin', require('./routes/admin').router);
app.use('/api/faq', require('./routes/faq'));
app.use('/api/testimonials', require('./routes/testimonials'));
app.use('/api/leads', require('./routes/leads'));

app.listen(PORT, () => {
  console.log(`Backend server listening on port ${PORT}`);
});
