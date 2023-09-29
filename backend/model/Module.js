const {DataTypes, Model} = require('sequelize');
const sequelize = require('../database/database');

class Module extends Model{}

Module.init({
    nom : {
        type : DataTypes.STRING,
        allowNull : false,
    },
    description : {
        type : DataTypes.STRING,
        allowNull : false,
    }, 
    lastResetRequest : {
       type : DataTypes.DATE, 
    }, 
},
{
    sequelize,
    modelName : 'Module'
})

module.exports = Module;