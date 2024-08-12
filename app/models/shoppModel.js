module.exports = (sequelize, DataTypes) => {
    const Shopp = sequelize.define('Shopp', {
        quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        
        },
        user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
            
            },
        name: {
        type: DataTypes.STRING,
        allowNull: false,
            
            },
        price: {
        type: DataTypes.FLOAT,
        allowNull: false,
            
            },
        description: {
        type: DataTypes.TEXT,
        allowNull: false,
        
        },
        
            
    }, {
        sequelize,
        paranoid: true,
    
    });
    
        return Shopp;
    }
