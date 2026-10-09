import express, { json } from "express";

import { connection } from "./lib/db";

const server = express();
connection();

server.get("/", (request, response) => {
  return response.json({ message: "Alguem acessou a rota inicial!" });
});

server.listen(3333, () => {
  console.log("Servidor rodandoem http://localhost:3333");
});
