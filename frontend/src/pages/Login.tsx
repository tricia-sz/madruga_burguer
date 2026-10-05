import { Link, NavLink } from "react-router";
import Input from "../components/shared/Layout/Input";
import Button from "../components/shared/Layout/Button";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(email);

  function handleSubmit(event: any) {
    event.preventDefault();
    console.log(email);
    console.log(password);
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
        </div>
        <div className="mb-12 flex flex-col items-center justify-between gap-4">
          <Button
            title="Login"
            onClick={() => {
              handleSubmit;
            }}
          />
          <NavLink to="/register">
            <Button variant="outline" title="Criar Conta" />
          </NavLink>
        </div>
      </div>
    </form>
  );
}
