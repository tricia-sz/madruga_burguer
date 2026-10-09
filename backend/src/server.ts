import express, { json } from "express";
import { prisma } from "./lib/db";
import cors from "cors";

import { connection } from "./lib/db";

const server = express();
server.use(express.json());
server.use(cors());

connection();

// server.get()

server.post("/login", async (request, response) => {
  const { email, password } = request.body;
  const users = await prisma.user.findFirst({
    where: {
      email,
      password,
    },
  });

  console.log(users);
  return response.json(users);
});

server.listen(3333, () => {
  console.log("Servidor rodandoem http://localhost:3333");
});
