const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
  foodName: String,
  quantity: String,
  pickupTime: String,
  location: String,
  imageUrl: String,
  donorId: String
});

module.exports = mongoose.model('Donation', donationSchema);

