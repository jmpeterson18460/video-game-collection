const express = require('express');
const bodyParter = require('body-parser');
const videogameRouter = require('./routes/videogame.router');
const systemRouter = require('./routes/system.router');

const PORT = process.env.PORT || 4002;

const app = express();

app.use(express.static('server/public'));

//Bringing in JSON to server
app.use(bodyParter.json());

//Routing url's to routers in routes folder
app.use('/videogame', videogameRouter);
app.use('/system', systemRouter);

app.listen(PORT, () => {
    console.log(`Listenting on port: ${PORT}`);
})