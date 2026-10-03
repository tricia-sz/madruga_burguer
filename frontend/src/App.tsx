import Header from "./components/Header";
import { Container } from "./components/shared/Contianer";
import Login from "./Login";

function App() {
  return (
    <>
      <Header />
      <Container className="mt-4 grid items-center justify-center gap-1 bg-[#161410] pt-8 pb-4 text-white">
        <Login />
      </Container>
    </>
  );
}

export default App;
