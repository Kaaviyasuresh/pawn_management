// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected'))
.catch((err) => console.log('❌ MongoDB connection error:', err));

// Landing Page Route
app.get('/', (req, res) => {
  res.send('<h1>Welcome to the Pawn Shop Backend</h1><p>Your API is running!</p>');
});

// API Routes
const productRoutes = require('./routes/product.routes');
const authRoutes = require('./routes/auth.routes'); // 🔐 Customer login/register
const customerRoutes = require('./routes/customer.routes'); // 🔒 Protected routes

app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/customer', customerRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
