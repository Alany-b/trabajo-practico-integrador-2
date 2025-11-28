import startDB from "./src/config/database.js";
import "dotenv/config";
import express from "express";
import router from "./src/routes/index.js";

const app = express();
app.use(express.json());

// rutas
app.use("/api", router);

app.listen(process.env.PORT, () => {
  console.log(`Servidor escuchando en el puerto ${process.env.PORT}`);
  startDB();
});
