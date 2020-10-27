// BvE62A725iOMAG5h
// IP -> 79.42.105.225
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Post = require('./models/post');

const app = express();

mongoose.connect("mongodb+srv://ziocal:BvE62A725iOMAG5h@cluster0.fe3ie.mongodb.net/node-angular?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true} )
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
  "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.post("/api/posts", (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  post.save().then( createdPost => {
    res.status(201).json( {
      message: 'Post added successfully',
      postId: createdPost._id
    });
  });
});

app.put("/api/posts/:id", (req, res, next) => {
  const post = new Post({
    _id: req.body.id,
    title: req.body.title,
    content: req.body.content
  });
  Post.updateOne({_id: req.params.id}, post().then(result => {
    console.log(result);
    res.status(200).json({ message: 'Update Successful!'});
  }))
});

app.get("/api/posts", (req, res, next) => {
  Post.find().then(documents => {
    res.status(200).json({
      message: "Posts fetched successfully",
      posts: documents
    });
  });
});

app.delete("/api/posts/:id", (req, res , next) => {
  Post.deleteOne({ _id: req.params.id, }).then(result => {
    console.log(result);
    res.status(200).json({ message : "Post deleted!"})
  });
});

module.exports = app; //in questo modo esportiamo anche tutti i middleware
