const { User } = require('../models');
const { hashPassword } = require('../services/authService');

// Create a new user
exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
// Register
exports.register = async (obj) => {
    try {
        obj.password = await hashPassword(obj.password);
        const user = await User.create(obj);
        
        return user;
    } catch (error) {
        return null;
    }
}
// Sing in
exports.loggin = async (obj) => {
    try {
        const user = await User.findOne({ where: { email: obj } });
        return user;
    }
    catch (error) {
        return { error: error.message };
    }
}

// get all users only admin
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({
        attributes: ['id', 'name', 'email','role','created_at'] 
      });
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get user by id
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id,{
        attributes: ['id', 'name', 'email','role','created_at'] // Especifica las columnas que deseas seleccionar
      });
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Actualizar un usuario
exports.updateUser = async (req, res) => {
  try {
    if (req.body.password) {
      req.body.password = await hashPassword(req.body.password);
    }
    const [updated] = await User.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedUser = await User.findByPk(req.params.id);
      res.status(200).json(updatedUser);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Eliminar un usuario
exports.deleteUser = async (req, res) => {
  try {
    const deleted = await User.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).json({ message: 'User deleted' });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
    }
}