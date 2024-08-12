module.exports = (sequelize, DataTypes) => {
    const ShoppingCart = sequelize.define('ShoppingCart', {
        quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        
        },
        user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
            
            },
        product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
            
            }
            
    }, {
        sequelize,
        paranoid: true,
    
    });

    ShoppingCart.associate = (models) => {
        ShoppingCart.belongsTo(models.Product, {
          
          foreignKey: 'product_id',
          as: 'product'
        });
      };
    
        return ShoppingCart;
    };
