const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const port = process.env.PORT || 5000;

app.use(cors({
  origin: 'http://localhost:8000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

const usuarioRoutes = require("./src/routes/usuario.routes");
const opinionRoutes = require("./src/routes/opinion.routes");

app.use("/usuarios", usuarioRoutes);
app.use("/opiniones", opinionRoutes);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
