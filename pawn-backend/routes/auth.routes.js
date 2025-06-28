// routes/auth.routes.js
const express = require('express');
const router = express.Router();
const Customer = require('../models/Customer');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key'; // Set in .env for production

// Register a new customer
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  
  // Check if customer already exists
  const existingCustomer = await Customer.findOne({ email });
  if (existingCustomer) {
    return res.status(400).json({ message: 'Customer already exists' });
  }

  // Hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const customer = new Customer({
    name,
    email,
    password: hashedPassword
  });

  await customer.save();
  res.status(201).json({ message: 'Customer registered successfully' });
});

// Login route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  
  const customer = await Customer.findOne({ email });
  if (!customer) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  // Compare provided password with hashed password
  const isMatch = await bcrypt.compare(password, customer.password);
  if (!isMatch) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  // Create JWT
  const token = jwt.sign({ id: customer._id }, JWT_SECRET, { expiresIn: '1h' });
  res.json({ token, customer: { id: customer._id, name: customer.name, email: customer.email } });
});

module.exports = router;
