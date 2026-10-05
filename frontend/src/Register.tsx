import { useState } from "react";
import Button from "./components/shared/Button";
import Input from "./components/shared/Input";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [cep, setCep] = useState("");

  function handleSubmit(event: React.SubmitEvent<T>) {
    event.preventDefault();
    console.log(name);
    console.log(email);
    console.log(password);
    console.log(confirmPassword);
    console.log(cep);
  }

  return (
    <form
      className="mx-0 mt-10 flex h-auto flex-col items-center justify-center gap-2 rounded-3xl bg-[#161410] p-4 pt-8 pb-12 shadow-2xl shadow-orange-600"
      onSubmit={handleSubmit}
    >
      <img
        src="./logo2.svg"
        alt="Logo Madruga Nurguer"
        style={{ width: "170px" }}
      />
      <Input
        type="text"
        placeholder="Nome"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <Input
        type="email"
        placeholder="E-mail"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <Input
        type="password"
        placeholder="Senha"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Confirme sua senha"
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <Input
        type="text"
        placeholder="CEP"
        onChange={(e) => setCep(e.target.value)}
      />

      <Button
        className="mt-2 rounded-full bg-orange-200 py-2 font-semibold text-black"
        onClick={() => {
          handleSubmit;
        }}
      >
        Criar Conta
      </Button>
    </form>
  );
};

export default Register;
