// routes/electronics.js
var express = require('express');
var router = express.Router();

// Hardcoded data for electronics
var electronicsData = [
  { brand: "Samsung", model: "Galaxy S23", price: 999 },
  { brand: "Apple", model: "iPhone 15", price: 1099 },
  { brand: "Sony", model: "WH-1000XM5", price: 350 }
];

// Route to render all electronics
router.get('/', function(req, res, next) {
  res.render('electronics', { title: 'Search Results for Electronics', results: electronicsData });
});

// Dynamic route for specific brand details
router.get('/:brand', function(req, res, next) {
  const brand = req.params.brand;
  const item = electronicsData.find(el => el.brand.toLowerCase() === brand.toLowerCase());

  if (item) {
    res.render('electronicsDetail', { title: `${brand} Details`, item: item });
  } else {
    res.status(404).send('Electronic item not found');
  }
});

module.exports = router;
