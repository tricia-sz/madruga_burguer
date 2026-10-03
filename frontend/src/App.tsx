import Header from "./components/Header";
import { Container } from "./components/shared/Contianer";
import Input from "./components/shared/Input";

function App() {
  return (
    <>
      <Header />
      <Container className="mt-4 grid items-center justify-center gap-1 bg-[#161410] pt-8 pb-4">
        <Input placeholder="Nome Completo" type="text" />
        <Input placeholder="E-mail" type="email" />
        <Input placeholder="Senha" type="password" />
      </Container>
    </>
  );
}

export default App;
