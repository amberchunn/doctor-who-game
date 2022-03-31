// http://hp-api.herokuapp.com/api/characters
import express from "express";
const port = process.env.PORT || 3000;

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, World");
});

app.listen(port, () => {
  console.log(`App is running on port ${port}!`);
});
