const express = require('express');
const router = express.Router();
const shoppingCartController = require('../controllers/shoppingCartController');
const {authenticateToken,authorizeRoles} = require('../middleware/authMiddleware');

// Get shoppingCart by user_id
router.get('/shoppingCartsUser',authorizeRoles(['admin','user','client']), shoppingCartController.getShoppingCartByUser);

// Create a new shoppingCart only admin or user
router.post('/shoppingCarts',authenticateToken, shoppingCartController.createShoppingCart);

// Get all shoppingCarts only admin
router.get('/shoppingCarts',authorizeRoles(['admin']), shoppingCartController.getAllShoppingCarts);

// Get shoppingCart by id 
router.get('/shoppingCarts/:id',authorizeRoles(['admin','user','client']), shoppingCartController.getShoppingCartById);

// Update a shoppingCart  
router.put('/shoppingCarts/:id',authorizeRoles(['admin','user','client']), shoppingCartController.updateShoppingCart);

// Delete a shoppingCart 
router.delete('/shoppingCarts/:id',authorizeRoles(['admin','user','client']), shoppingCartController.deleteShoppingCart);



module.exports = router;