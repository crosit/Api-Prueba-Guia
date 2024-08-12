module.exports = (sequelize, DataTypes) => {
    const CreditCards = sequelize.define('CreditCards', {
        number: {
        type: DataTypes.STRING,
        allowNull: false,
        
        },
        expiration_date: {
        type: DataTypes.DATE,
        allowNull: false
        },
        cvv: {
        type: DataTypes.INTEGER,
        allowNull: false
        },
        user_id: {
        type: DataTypes.INTEGER, 
        allowNull: false,
        
        },
        postal_code: {
        type: DataTypes.STRING,
        allowNull: false
        },
        money: {
        type: DataTypes.FLOAT,
        allowNull: false
        },

    }, {
        sequelize,
        paranoid: true,
    
    });
    
        return CreditCards;
    }
