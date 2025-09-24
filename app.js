import startDB from "./src/config/database.js";
import "dotenv/config";
import express from "express";

const app=express();
app.use(express.json());

app.listen(process.env.PORT, () => {
    console.log(`Servidor escuchando en el puerto ${process.env.PORT}`);
    startDB();
}   
);

