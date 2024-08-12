const {CreditCards} = require('../models');

// Create a new creditCard
exports.createCreditCard = async (req, res) => {
    try {
        const obj = req.body;
        obj.user_id = req.user.id;
        const creditCard = await CreditCards.create(obj);
        res.status(201).json(creditCard);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all creditCards
exports.getAllCreditCards = async (req, res) => {
    try {
        const userId = req.user.id;
        const creditCards = await CreditCards.findAll( {where: {user_id: userId}});
        res.status(200).json(creditCards);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get creditCard by id
exports.getCreditCardById = async (req, res) => {
    try {
        const creditCard = await CreditCards.findByPk(req.params.id);
        if (creditCard) {
            res.status(200).json(creditCard);
        } else {
            res.status(404).json({ error: 'CreditCard not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Update a creditCard
exports.updateCreditCard = async (req, res) => {
    try {
        const creditCard = await CreditCards.findByPk(req.params.id);
        if (creditCard) {
            await creditCard.update(req.body);
            res.status(200).json(creditCard);
        } else {
            res.status(404).json({ error: 'CreditCard not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a creditCard
exports.deleteCreditCard = async (req, res) => {
    try {
        const creditCard = await CreditCards.findByPk(req.params.id);
        if (creditCard) {
            await creditCard.destroy();
            res.status(204).json();
        } else {
            res.status(404).json({ error: 'CreditCard not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get creditCard by user
exports.getCreditCardByUser = async (req, res) => {
    try {
        const creditCard = await CreditCards.findAll({where: {user_id: req.params.id}});
        if (creditCard) {
            res.status(200).json(creditCard);
        } else {
            res.status(404).json({ error: 'CreditCard not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
