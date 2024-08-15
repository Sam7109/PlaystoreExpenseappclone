const Sequelize = require('../utils/sequelize');
const Expense = Sequelize.define('expclone', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  credited: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  debited: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  amount: {
    type: Sequelize.DECIMAL,
    allowNull: false,
  },
  startDate: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
  endDate: {
    type: Sequelize.DATEONLY,
    allowNull: true,
  },
});

Expense.sync()
  .then(() => {
    console.log('Expense model has been associated successfully');
  })
  .catch((error) => {
    console.error('Failed to associate Expense model:', error);
  });
module.exports = Expense;
