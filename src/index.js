const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

const routes = require("./routes/students");

var corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

app.use("/", routes);

app.listen(port, () => {
  console.log(`App corriendo en el puerto 5000 http://localhost:${port}`);
});
