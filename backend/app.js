const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('First Middleware!');
  console.log(req.method, req.path) //vediamo perchè il middleware esegue 2 volte: c'è anche la richiesta del favicon, ecco perchè
  next();
});

app.use((req, res, next) => {
  res.send('Hello from express!')
});

module.exports = app; //in questo modo esportiamo anche tutti i middleware
