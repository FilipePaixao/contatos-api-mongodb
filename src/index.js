import express from "express";
import logMiddleware from "./middleware/logger.js";
import { createUserService } from "./service/user.service.js";

import mongoose from "mongoose";


const app = express();

const port = 3000;

app.use(express.json());
app.use(logMiddleware);

mongoose.connect("mongodb+srv://{user}:{password}@cluster0.4lhzj.mongodb.net/"); // mudar para sua URI de conexão com o MongoDB

mongoose.connection.on("error", (error) => {
  console.error("Erro de conexão com o MongoDB:", error);
});

mongoose.connection.once("connected", () => {
  console.log("Conectado ao MongoDB");
});

app.get("/", (req, res) => {
  res.send("Hello World");
});


app.post("/contatos", async (req, res) => {
  try {
    console.log(" Dados do usuário: " + req.body);
    const newUser = await createUserService(req.body);
    return res.status(201).json(newUser);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});




app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});