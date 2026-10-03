import Button from "./components/shared/Button";
import { Container } from "./components/shared/Contianer";
import Input from "./components/shared/Input";

const Login = () => {
  return (
    <Container className="flex h-screen flex-col items-center justify-center gap-2 border">
      <Input type="text" placeholder="Nome Completo" />
      <Input type="email" placeholder="E-mail" />
      <Input type="password" placeholder="Senha" />
      <img
        src="./logo1.png"
        alt="Logo Madruga Nurguer"
        style={{ width: "170px" }}
      />
      <Button className="rounded-full bg-red-700 font-semibold text-white">
        Login
      </Button>
    </Container>
  );
};

export default Login;
