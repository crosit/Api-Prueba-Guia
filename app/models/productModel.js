module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        name: {
        type: DataTypes.STRING,
        allowNull: false,
        
        },
        description: {
        type: DataTypes.TEXT,
        allowNull: false
        },
        price: {
        type: DataTypes.FLOAT,
        allowNull: false
        },
        stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        
        }
    }, {
        sequelize,
        paranoid: true,
    
    });

    Product.associate = (models) => {
        Product.hasMany(models.ShoppingCart, {

            foreignKey: 'product_id',
            as: 'shopping_carts'

        });
      };
    
        return Product;
    };

