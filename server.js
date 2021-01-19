import express from "express";
import mongoose from "mongoose";
import Cards from "./dbCards.js";
// App config
const app = express();
const port = process.env.PORT || 8001;
// 9AetORXH3yetd7Ty
const connection_url = `mongodb+srv://admin:9AetORXH3yetd7Ty@cluster0.tqupg.mongodb.net/tinderdb?retryWrites=true&w=majority`;

// Middlewares

// DB config
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
// API Endpoints
app.get("/", (req, res) => res.status(200).send("Hello world"));

app.post("/tinder/card", (req, res) => {
  const dbCard = req.body;
  Cards.create(dbCard, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/tinder/cards", (res, req) => {
  Cards.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

// Listener
app.listen(port, () => console.log(`listening on localhost ${port}`));
