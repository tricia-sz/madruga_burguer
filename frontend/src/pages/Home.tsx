import { Container } from "../components/shared/Contianer";
import Login from "./Login";
import Register from "./Register";

function Home() {
  return (
    <>
      <Container className="mb-10 flex items-center justify-center gap-4 text-white">
        <Login />
        <Register />
      </Container>
    </>
  );
}

export default Home;
