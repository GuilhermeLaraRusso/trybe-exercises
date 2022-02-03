module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.INTEGER,
  },
  {
    timestamps: false, // Remove a obrigatoriedade de utilizar os campos 'createdAt' e 'updatedAt'
    tableName: 'Employees',
    underscored: true,
  });

  // Relacionamento 1:1
  // Employee.associate = (models) => {
  //   Employee.hasOne(models.Address,
  //     { foreignKey: 'employee_id', as: 'addresses' });
  // };
  
  
  // Relacionamento 1:N
  Employee.associate = (models) => {
    Employee.hasMany(models.Address,
      { foreignKey: 'employee_id', as: 'addresses' });
  };

  return Employee;
}