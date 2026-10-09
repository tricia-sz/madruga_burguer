import express, { json } from "express";
import { prisma } from "./lib/db";
import cors from "cors";

import { connection } from "./lib/db";

const server = express();
server.use(express.json());
server.use(cors());

connection();

server.post("/login", async (request, response) => {
  try {
    const { email, password } = request.body;

    if (!email || !password) {
      response.status(404).json({ message: "Usuário não encontrado!" });
      return;
    }

    const user = await prisma.user.findFirst({
      where: {
        email,
        password,
      },
    });

    if (!user) {
      response.status(404).json({ message: "Usuário não encontrado." });
      return;
    }

    response.status(200).json(user);
  } catch (error) {
    response.status(500).json({ message: "Erro no Servidor" });
    return;
  }
});

server.listen(3333, () => {
  console.log("Servidor rodandoem http://localhost:3333");
});
