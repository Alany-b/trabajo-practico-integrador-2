import startDB from "./src/config/database.js";
import "dotenv/config";
import express from "express";
import { userRoutes } from "./src/routes/user.route.js";

const app=express();
app.use(express.json());


// rutas
app.use("/api", userRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Servidor escuchando en el puerto ${process.env.PORT}`);
    startDB();
}   
);

