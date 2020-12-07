const express = require("express");
const cors = require("cors");
const { CLIENT_ORIGIN, PORT } = require("../config");

const app = express();

app.use(
  cors({
    origin: CLIENT_ORIGIN,
  })
);

app.use("/", require("../people/people.router"));
app.use("/", require("../pets/pets.router"));

app.get("/", (req, res) => {
  res.send("Hello from Petful!");
});

app.listen(PORT, () => {
  console.log(`[petful-server] Listening on ${PORT}.`);
});

module.exports = app;
