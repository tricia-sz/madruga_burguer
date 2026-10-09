import { NavLink } from "react-router";
import Input from "../components/shared/Layout/Input";
import Button from "../components/shared/Layout/Button";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();

    try {
      const response = fetch("http://localhost:3333/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },

        body: JSON.stringify({ email, password }),
      });

      if (!email || !password) {
        setError("E-mail e senha são obrigatórios");
        return;
      }

      if ((await response).status === 404) {
        setError("Usuário não encontrado.");
      }
      if ((await response).status === 400) {
        setError("Usuário e senha são obrigatórios");
      }
      if ((await response).status === 200) {
        setError("");
        const data = await (await response).json();
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
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
          <p className="text-sm text-red-500">{error} </p>
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
