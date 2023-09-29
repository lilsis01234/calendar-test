const Sequelize = require('./database');
const AgendaPersonne = require('../model/Seance')
const Module = require('../model/Module')


async function syncDatabase(){
    try{
        await Sequelize.sync({force : true}); 
  console.log('La base de donnée est synchronisée avec succès')
    }  catch (error){
        console.error('Erreur lors de la synchronisation de la base de données :', error )
    } finally {
        Sequelize.close();
    }
}

syncDatabase();