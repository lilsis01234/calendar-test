const {DataTypes, Model} = require('sequelize');
const sequelize = require('../database/database');
const Module = require('./Module')

class Agenda extends Model{}

Agenda.init({
    date : {
        type : DataTypes.DATE,
        allowNull : false,
    },
    heureStart : {
        type : DataTypes.DATE,
        allowNull : false,
    }, 
    heureEnd : {
        type : DataTypes.DATE,
        allowNull : false,
    }, 
    module: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: Module,
          key: 'id',
        },
      },
      title:{
        type:DataTypes.STRING
      },
    lastResetRequest : {
       type : DataTypes.DATE, 
    }, 
},
{
    sequelize,
    modelName : 'Agenda'
})

module.exports = Agenda;