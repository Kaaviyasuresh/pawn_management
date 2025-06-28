// routes/customer.routes.js
const express = require('express');
const router = express.Router();
const Customer = require('../models/Customer');
const auth = require('../middleware/auth'); // JWT middleware

// @route    GET /api/customer/me
// @desc     Get logged-in customer info (protected)
// @access   Private
router.get('/me', auth, async (req, res) => {
  try {
    // req.customer is added by auth middleware after token verification
    const customer = await Customer.findById(req.customer.id).select('-password');
    if (!customer) {
      return res.status(404).json({ message: 'Customer not found' });
    }
    res.json(customer);
  } catch (error) {
    console.error('Error fetching customer data:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
