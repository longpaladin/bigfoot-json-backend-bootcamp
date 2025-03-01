const express = require("express");
const { getSightings } = require("./utils.js");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT;
const app = express();

app.use(cors());

app.get("/sightings", async (req, res) => {
  const sightings = await getSightings();
  res.json(sightings);
});

app.get("/sightings/:sightingIndex", async (req, res) => {
  const sightings = await getSightings();
  const sighting = req.params.sightingIndex;
  res.json(sightings[+sighting]);
});

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
