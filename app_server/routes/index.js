const express = require('express');
const router = express.Router();

console.log('API ROUTES FILE LOADED');

const ctrlTrips = require('../controllers/trips');

router.get('/trips', ctrlTrips.tripsList);
router.post('/trips', ctrlTrips.tripsAddTrip);

module.exports = router;