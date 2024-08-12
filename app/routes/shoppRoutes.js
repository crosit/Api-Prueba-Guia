const express = require('express');
const router = express.Router();
const shoppController = require('../controllers/shoppController');
const {authenticateToken,authorizeRoles} = require('../middleware/authMiddleware');

// Create a new shopp only admin or user
router.post('/shopps',authenticateToken, shoppController.createShopp);

// Get all shopps only admin
router.get('/shopps',authorizeRoles(['admin']), shoppController.getAllShopps);

// Get shopp by id
router.get('/shopps/:id',authorizeRoles(['admin','user','client']), shoppController.getShoppById);

// Update a shopp
router.put('/shopps/:id',authorizeRoles(['admin','user','client']), shoppController.updateShopp);

// Delete a shopp
router.delete('/shopps/:id',authorizeRoles(['admin','user','client']), shoppController.deleteShopp);

// Get all shopps by user
router.get('/shoppsUser',authorizeRoles(['admin','user','client']), shoppController.getShoppByUser);

module.exports = router;