const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const SERVER_PORT = 5050;

const inventory = [
  "computer",
  "purse",
  "hammer",
  "cable",
  "helmet",
  "phone",
  "tacos",
  "microwave",
  "coat",
  "bike",
];

app.get("/api/inventory", (req, res) => {
  if (req.query.item) {
    const filteredItems = inventory.filter((invItem) =>
      invItem.toLowerCase().includes(req.query.item.toLowerCase())
    );
    res.status(200).send(filteredItems);
  } else {
    res.status(200).send(inventory);
  }
});

app.get("/api/inventory/:index", (req, res) => {
  const { index } = req.params;
  res.status(200).send(inventory[index]);
});

app.listen(SERVER_PORT, () =>
  console.log("server listining on port " + SERVER_PORT)
);


// npm i express - to download express
// npm init -y - to download json package
// npm i cors - to download cors
// nodemon server/server - to launch server
