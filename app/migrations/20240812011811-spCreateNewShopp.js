'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   const createStoredProcedure = `
   CREATE PROCEDURE spCreateNewShopp(IN userId INT, IN creditCardId INT)
      BEGIN 
      DECLARE totalCost DECIMAL(10, 2) DEFAULT 0;
    DECLARE cardMoney DECIMAL(10, 2);
    DECLARE deleted_at_value INT;
    
    -- START TRANSACTION
    START TRANSACTION;
	

	SELECT COUNT(*) INTO deleted_at_value
    FROM shopping_carts
    WHERE shopping_carts.user_id = userId
      AND deleted_at IS NULL;
 
	IF deleted_at_value = 0 THEN
		SIGNAL SQLSTATE '45000'
		SET MESSAGE_TEXT = 'Invalid value for deleted_at';
	END IF;
    
    -- Calculate the total cost of the shopping cart
    SELECT SUM(p.price * sc.quantity) INTO totalCost
    FROM shopping_carts sc
    JOIN products p ON sc.product_id = p.id
    WHERE sc.user_id = userId ;
    
    -- Get the money available on the credit card
    SELECT money INTO cardMoney
    FROM credit_cards
    WHERE id = creditCardId;
    
    -- Validate if the credit card has enough money
    IF cardMoney >= totalCost THEN
		-- Deduct money from the card
        UPDATE credit_cards
        SET money = money - totalCost
        WHERE id = creditCardId;
        
		-- Registrar la compra en la tabla de shopps
        INSERT INTO shopps (user_id, name, description, price, quantity)
        SELECT userId, p.name, p.description, (p.price * sc.quantity), sc.quantity 
        FROM shopping_carts sc
		JOIN products p ON sc.product_id = p.id
        WHERE sc.product_id = p.id and userId = sc.user_id and sc.deleted_at IS NULL AND P.deleted_at IS NULL ;
        
         -- Empty the shopping cart
		UPDATE shopping_carts
		SET deleted_at = NOW(), quantity = 0
		WHERE shopping_carts.user_id = userId;
        
        COMMIT;
	ELSE
        -- The card does not have enough money
        ROLLBACK;
        SELECT 0 AS message;
    
    END IF;
    
    -- Retornar si la compra fue exitosa o no
    SELECT 1 AS message;
    
    
END
   `;
   await queryInterface.sequelize.query(createStoredProcedure);
  },

  async down (queryInterface, Sequelize) {
    const dropStoredProcedure = `
      DROP PROCEDURE IF EXISTS spCreateNewShopp;
    `;

    await queryInterface.sequelize.query(dropStoredProcedure);
  }
};
