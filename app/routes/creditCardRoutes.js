const express = require('express');
const router = express.Router();
const creditCardController = require('../controllers/creditCardController');
const {authenticateToken,authorizeRoles} = require('../middleware/authMiddleware');

// Create a new creditCard only admin or user
router.post('/creditCards',authenticateToken, creditCardController.createCreditCard);

// Get all creditCards only admin
router.get('/creditCards',authenticateToken, creditCardController.getAllCreditCards);

// Get creditCard by id
router.get('/creditCards/:id',authenticateToken, creditCardController.getCreditCardById);

// Update a creditCard
router.put('/creditCards/:id',authenticateToken, creditCardController.updateCreditCard);

// Delete a creditCard
router.delete('/creditCards/:id',authenticateToken, creditCardController.deleteCreditCard);

// Get creditCard by user
router.get('/creditCardsUser/:id',authenticateToken, creditCardController.getCreditCardByUser);

module.exports = router;