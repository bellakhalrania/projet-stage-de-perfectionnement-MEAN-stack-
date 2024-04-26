const express = require('express');
const employeeRoute = require('./routers/employee.route');
const userRoute = require('./routers/user.route');
const newsRoute = require('./routers/news.route');
const adminRoute = require('./routers/admin.route');
const reunionRoute = require('./routers/reunion.route');
const demandeRoute = require('./routers/demande.route');
const emploiRoute = require('./routers/demandeEmploi.route');
const congeRoute = require('./routers/demandeConge.route');
const accepterRoute = require('./routers/demandeAccepter.route');
const conversationRoute = require('./routers/conversationfile.route');
const formationRoute = require('./routers/formation.route');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();



// Middleware de gestion des CORS
app.use(cors());

// Middleware de traitement des requêtes JSON et URL encodées
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/', employeeRoute);
app.use('/', userRoute);
app.use('/', newsRoute);
app.use('/', reunionRoute);
app.use('/admin', adminRoute);
app.use('/', demandeRoute);
app.use('/', emploiRoute);
app.use('/', congeRoute);
app.use('/', accepterRoute);
app.use('/', conversationRoute);
app.use('/', formationRoute);
// Middleware de gestion des erreurs
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Démarrage du serveur
app.listen(3000, () => console.log('Server running on port 3000'));
