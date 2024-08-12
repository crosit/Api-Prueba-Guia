const {ShoppingCart} = require('../models')
const {Product} = require('../models')
// Create a new shoppingCart
exports.createShoppingCart = async (req, res) => {
    try {
        const obj = req.body;
        obj.user_id = req.user.id;
        
        // Validate if the product exists
        const product = await Product.findByPk(obj.product_id);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        // Validate if the product is already in the shoppingCart
        const validateShoppingCart = await ShoppingCart.findOne({ where: { product_id: obj.product_id } });
        if (validateShoppingCart) {
            return res.status(400).json({ error: 'Product already in shopping Cart please edit or buy de shopping Cart' });
        }
        // Validate stock
        const updatedStock = product.stock - obj.quantity;
        if (updatedStock < 0) {
            return res.status(400).json({ error: 'Not enough stock' });
        }
        await product.update({ stock: updatedStock });
        const shoppingCart = await ShoppingCart.create(obj);
        res.status(201).json(shoppingCart);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all shoppingCarts
exports.getAllShoppingCarts = async (req, res) => {
    try {
        const shoppingCarts = await ShoppingCart.findAll();
        res.status(200).json(shoppingCarts);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get shoppingCart by id
exports.getShoppingCartById = async (req, res) => {
    try {
        const shoppingCart = await ShoppingCart.findByPk(req.params.id);
        if (shoppingCart) {
            res.status(200).json(shoppingCart);
        } else {
            res.status(404).json({ error: 'ShoppingCart not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Update a shoppingCart
exports.updateShoppingCart = async (req, res) => {
    try {
        
        const shoppingCart = await ShoppingCart.findByPk(req.params.id);
        const newQuantity = shoppingCart.quantity - req.body.quantity;
        const product = await Product.findByPk(shoppingCart.product_id);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        const updatedStock = product.stock + newQuantity;
        if (updatedStock < 0) {
            return res.status(400).json({ error: 'Not enough stock' });
        }
        await product.update({ stock: updatedStock });
        if (newQuantity == 0) {
            await shoppingCart.destroy();
            res.status(200).json();
        }
        if (shoppingCart) {
            await shoppingCart.update({ quantity: newQuantity });
            res.status(200).json(shoppingCart);
        } else {
            res.status(404).json({ error: 'ShoppingCart not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a shoppingCart
exports.deleteShoppingCart = async (req, res) => {
    try {
        const shoppingCart = await ShoppingCart.findByPk(req.params.id);
        const product = await Product.findByPk(shoppingCart.product_id);
        const updatedStock = product.stock + shoppingCart.quantity;
        await product.update({ stock: updatedStock });
        if (shoppingCart) {
            await shoppingCart.destroy();
            res.status(204).json();
        } else {
            res.status(404).json({ error: 'ShoppingCart not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get shoppingCart by user
exports.getShoppingCartByUser = async (req, res) => {
    try {
        const id = req.user.id;
        const shoppingCarts = await ShoppingCart.findAll({ where: { user_id: id },
            include: [{ model: Product, as: 'product' }]}
        );
        res.status(200).json(shoppingCarts);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
