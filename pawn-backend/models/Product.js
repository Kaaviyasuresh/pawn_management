const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  productName: String,
  condition: String,
  estimatedValue: Number,
  warrantyMonths: Number,
  loanApproved: Boolean,
  loanAmount: Number
});

module.exports = mongoose.model('Product', ProductSchema);
