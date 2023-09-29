const express = require('express');
//const mysql = require('mysql');
const sequelize = require('./database/database');
const cors = require('cors');
const path = require('path');
const agendaRoutes = require('../backend/routes/AjoutAgenda')
const displayRoutes = require('../backend/routes/AfficheAgenda')
const app = express();

//importation des configurations$
// const dotenv = require('dotenv');
// const auth_config = require('./config/auth_config');

// require('./config/passwordResetConfig')
// dotenv.config();
// auth_config();

/*
const connection = mysql.createConnection({
    host : 'localhost', 
    user : 'root',
    password : '',
    database : 'testintranet',
})
*/
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
//Ajout de middleware express.json()
app.use(express.json())



app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

//utilisation des routes middleware
// app.use('/api', api_config)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api/agenda', agendaRoutes);
app.use('/api/calendrier', displayRoutes);

//Connection à la base de donnée MySQL
sequelize.authenticate()
    .then(() => {
        console.log('Connecté à la base de données MySQL');
    })
    .catch((err) =>{
        console.error('Erreur à la connexion à la base de donnes:', err)
    })

//Initialisation du serveur
app.listen(8000, () => {
    console.log('Serveur Express en écoute sur le port 8000')
});
