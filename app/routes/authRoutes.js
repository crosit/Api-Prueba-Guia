const express = require('express');
const router = express.Router();
const User = require('../controllers/userController');
const { generateToken, comparePassword } = require('../services/authService');

// Register
router.post('/register', async (req, res) => {
    const { role, email, password, name } = req.body;
  try {
    if (!email, !password, !name, !role) {
      return res.status(400).json({ error: 'Data required' });
    }

    const user = await User.register(req.body);
    
    if (!user) {
      return res.status(400).json({ message: 'this email is already use' });
    }

    const token = generateToken(user);
    res.status(201).json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Error registering user', message: error.message });
  }
});

// Sing in
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.loggin(email);
    if (!user || !(await comparePassword(password, user.password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const token = generateToken(user);
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Error logging in' });
  }
});

module.exports = router;
