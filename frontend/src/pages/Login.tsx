import { useState } from "react";
import Button from "../components/shared/Button";
import Input from "../components/shared/Input";
import { Link } from "react-router";

const Login = () => {
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
      className="mx-0 mt-10 flex h-auto flex-col items-center justify-center gap-2 rounded-3xl bg-[#161410] p-4 pt-8 pb-12 shadow-2xl shadow-orange-600"
      onSubmit={handleSubmit}
    >
      <Link to="/">
        <img
          src="./logo2.svg"
          alt="Logo Madruga Nurguer"
          style={{ width: "170px" }}
        />
      </Link>
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

      <Button
        title="Login"
        onClick={() => {
          handleSubmit;
        }}
      />
    </form>
  );
};

export default Login;
