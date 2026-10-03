import { useState } from "react";
import Button from "./components/shared/Button";
import { Container } from "./components/shared/Contianer";
import Input from "./components/shared/Input";

const Register = () => {
  const [email, setEmail] = useState("");
  console.log(email);

  return (
    <Container className="mx-0 mt-10 flex h-auto flex-col items-center justify-center gap-2 rounded-3xl bg-[#161410] p-4 pt-8 pb-12 shadow-2xl shadow-orange-600">
      <img
        src="./logo2.svg"
        alt="Logo Madruga Nurguer"
        style={{ width: "170px" }}
      />
      <Input type="text" placeholder="Nome Completo" />
      <Input
        type="email"
        placeholder="E-mail"
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />
      <Input type="password" placeholder="Senha" />

      <Button className="mt-2 rounded-full bg-orange-600 py-2 font-semibold text-orange-950">
        Criar Conta
      </Button>
    </Container>
  );
};

export default Register;
