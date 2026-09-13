const express = require('express');
const router = express.Router();
const passport = require('passport');

const tripsController = require('../controllers/trips');
const authController = require('../controllers/authentication');

// Authentication routes
router.post('/register', authController.register);
router.post('/login', authController.login);

// Trip routes
router
  .route('/trips')
  .get(tripsController.tripsList)
  .post(
    passport.authenticate('jwt', { session: false }),
    tripsController.tripsAddTrip
  );

router
  .route('/trips/:tripCode')
  .get(tripsController.tripsFindCode)
  .put(
    passport.authenticate('jwt', { session: false }),
    tripsController.tripsUpdateOne
  )
  .delete(
    passport.authenticate('jwt', { session: false }),
    tripsController.tripsDeleteOne
  );

module.exports = router;