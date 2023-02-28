const express = require('express'); 
const app = express(); 
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
//appel des routes
const userRoutes = require('./routes/user');
const movieRoutes = require('./routes/movie');
const productionRoutes = require('./routes/production');
const workerRoutes = require('./routes/worker');
const path = require('path');

//connect to mongodb
mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://apiMovie:RhO2qmY4ge1E9pr4@movieapp.oahfynn.mongodb.net/movies',

  { useNewUrlParser: true,
    useUnifiedTopology: true })    
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));



  app.use(express.json());
  app.use(bodyParser.json());

  //app.use permet de créer un middleware qui sera éfféctif dans toute l'application
  //le setHeader permet d'ajouter un header à la requête et d'autoriser les requêtes cross-origin
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });


//Routes de l'API 
app.use('/api/movie', movieRoutes);
app.use('/api/auth', userRoutes);
app.use('/api/production', productionRoutes);
app.use('/api/worker', workerRoutes);
app.use('/images', express.static(path.join(__dirname, 'images')));



module.exports = app;