// BvE62A725iOMAG5h
// IP -> 79.42.105.225
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Post = require('./models/post');

const app = express();

mongoose.connect("mongodb+srv://ziocal:BvE62A725iOMAG5h@cluster0.fe3ie.mongodb.net/test?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true} )
.then(() => {
  console.log('Connected to database!');
})
.catch(() => {
  console.log('Connection failed!');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); //non importa il dominio della richiesta, ma gli è permesso di accedere alle risorse
  res.setHeader(
  "Access-Control-Allow-Headers",
  "Origin, X-Requested-With, Content-Type, Accept"
  ); //la richiesta può avere anche questi extra Header e in questo caso gli è sempre permesso accedere alle risorse, se ha degli header non definiti qui, la richiesta verrà bloccata
  res.setHeader(
    "Access-Control-Allow-Methods",
  "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.post("/api/posts", (req, res, next) => {
  const posts = new Post({
    title: req.body.title,
    content: req.body.content
  });
  console.log(posts);
  res.status(201).json( {
    message: 'Post added successfully'
  });

});

app.use('/api/posts', (req, res, next) => {
  const posts = [
    {
      id: "ijsdaofjosad2334",
      title: "First server-side post",
      content: "This is coming from the server"
    },
    {
      id: "ijsda3453osad2334",
      title: "Second server-side post",
      content: "This is coming from the server!"
    }
  ];
  res.status(200).json({
    message: "Posts fetched successfully",
    posts: posts
  });
});

module.exports = app; //in questo modo esportiamo anche tutti i middleware
