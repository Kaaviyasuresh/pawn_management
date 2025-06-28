const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Smart loan logic
const calculateLoanAmount = (condition, estimatedValue, warrantyMonths) => {
  if (condition === 'Excellent' && warrantyMonths > 6) return estimatedValue * 0.8;
  if (condition === 'Good') return estimatedValue * 0.6;
  if (condition === 'Fair') return estimatedValue * 0.4;
  return estimatedValue * 0.2;
};

// POST /api/products
router.post('/', async (req, res) => {
  const { productName, condition, estimatedValue, warrantyMonths } = req.body;
  const loanAmount = calculateLoanAmount(condition, estimatedValue, warrantyMonths);
  const product = new Product({
    productName,
    condition,
    estimatedValue,
    warrantyMonths,
    loanApproved: true,
    loanAmount
  });
  await product.save();
  res.json(product);
});

// GET /api/products
router.get('/', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

module.exports = router;
