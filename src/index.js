const express = require("express");
const app = express();
const port = 5000;

const routes = require("./routes/students");

app.use("/", routes);

app.listen(port, () => {
  console.log(`App corriendo en el puerto 5000 http://localhost:${port}`);
});
