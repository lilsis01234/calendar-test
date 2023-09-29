const express = require('express');
const router = express.Router();
const  Agenda  = require('../model/Seance'); // Assurez-vous d'importer correctement votre modèle Agenda
const moment = require('moment');
const timezone = require('moment-timezone'); 
moment.tz.setDefault('Indian/Antananarivo');
// Route POST pour ajouter les événements dans la base de données
router.post('/agenda', async (req, res) => {
  try {
    const events = req.body;

    const moduleId = 1; // Module fixé à 1

    // Insérer chaque événement dans la base de données
    const agendaEntries = await Promise.all(events.map(async event => {
      const { start, end,title } = event;
      
      const agendaEntry = await Agenda.create({
        date: start,      // Convertir en UTC avant de stocker dans la base de données
        heureStart: start,
        heureEnd: end,
        module: moduleId,
        title:title,
      });
      return agendaEntry;
    }));

    res.status(201).json(agendaEntries);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

module.exports = router;
