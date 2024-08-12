const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const {authenticateToken,authorizeRoles} = require('../middleware/authMiddleware');

// Create a new product only admin or user
router.post('/products',authorizeRoles(['admin','user']), productController.createProduct);

// Get all products 
router.get('/products',authenticateToken, productController.getAllProducts);

// Get product by id 
router.get('/products/:id',authenticateToken, productController.getProductById);

// Update a product only admin or user
router.put('/products/:id',authorizeRoles(['admin','user']), productController.updateProduct);

// Delete a product only admin
router.delete('/products/:id',authorizeRoles(['admin']), productController.deleteProduct);

module.exports = router;
