import { useState } from "react";
import Input from "../components/shared/Layout/Input";
import Button from "../components/shared/Layout/Button";
import { NavLink } from "react-router";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [cep, setCep] = useState("");

  function handleSubmit(event: any) {
    event.preventDefault();
    console.log(name);
    console.log(email);
    console.log(password);
    console.log(confirmPassword);
    console.log(cep);
  }

  return (
    <form
      className="mx-0 flex min-h-screen flex-col items-center justify-center gap-2 bg-orange-100"
      onSubmit={handleSubmit}
    >
      <div className="mx-0 flex flex-col items-center justify-center gap-2 rounded-2xl bg-[#161410] p-8 py-8">
        <NavLink to="/">
          <img
            src="./logo2.svg"
            alt="Logo Madruga Nurguer"
            style={{ width: "170px" }}
          />
        </NavLink>
        <div className="flex flex-col gap-4">
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
        </div>
        <div className="mt-4 mb-12 flex flex-col items-center justify-between gap-4">
          <Button
            variant="outline"
            title="Criar Conta"
            onClick={() => {
              handleSubmit;
            }}
          />
          <NavLink to="/login">
            <Button variant="default" title="Login" />
          </NavLink>
        </div>
      </div>
    </form>
  );
}
