// app.js

const express = require("express");
const app = express();
const routes = require("./routes.js");

app.use("/", routes);

app.get("/", (req, res) => {
  res.send("hello");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
