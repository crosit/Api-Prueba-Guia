const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const {authenticateToken,authorizeRoles} = require('../middleware/authMiddleware');
// Create a new user
router.post('/users', userController.createUser);

// Get all users only admin
router.get('/users',authorizeRoles(['admin']), userController.getAllUsers);

// Get user by id
router.get('/users/:id', userController.getUserById);

// Update a user
router.put('/users/:id', userController.updateUser);

// Delete a user only admin
router.delete('/users/:id',authorizeRoles(['admin']), userController.deleteUser);

module.exports = router;
