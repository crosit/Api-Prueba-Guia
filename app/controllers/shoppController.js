const {Shopp} = require('../models');
const { Sequelize, QueryTypes } = require('sequelize');
const sequelize = new Sequelize('prueba', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql',
});

// Create a new shopp
exports.createShopp = async (req, res) => {
    try {
        const {creditCardId} = req.body;
        const userId = req.user.id;
        
        const result = await sequelize.query('CALL spCreateNewShopp(:userId, :creditCardId)',{
            replacements: { userId, creditCardId}
        });
        res.status(201).json({result});
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all shopps
exports.getAllShopps = async (req, res) => {
    try {
        const shopps = await Shopp.findAll();
        res.status(200).json(shopps);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get shopp by id
exports.getShoppById = async (req, res) => {
    try {
        const shopp = await Shopp.findByPk(req.params.id);
        if (shopp) {
            res.status(200).json(shopp);
        } else {
            res.status(404).json({ error: 'Shopp not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Update a shopp
exports.updateShopp = async (req, res) => {
    try {
        const shopp = await Shopp.findByPk(req.params.id);
        if (shopp) {
            await shopp.update(req.body);
            res.status(200).json(shopp);
        } else {
            res.status(404).json({ error: 'Shopp not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a shopp
exports.deleteShopp = async (req, res) => {
    try {
        const shopp = await Shopp.findByPk(req.params.id);
        if (shopp) {
            await shopp.destroy();
            res.status(204).json();
        } else {
            res.status(404).json({ error: 'Shopp not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get shopp by user
exports.getShoppByUser = async (req, res) => {
    try {
        const userId = req.user.id;
        const shopp = await Shopp.findAll({where: {user_id: userId}});
        if (shopp) {
            res.status(200).json(shopp);
        } else {
            res.status(404).json({ error: 'Shopp not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
