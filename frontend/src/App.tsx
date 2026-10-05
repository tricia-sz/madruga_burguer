import Header from "./components/shared/Header";
import { Container } from "./components/shared/Contianer";
import Login from "./Login";
import Register from "./Register";
import Footer from "./components/shared/Footer";

function App() {
  return (
    <>
      <Header />
      <Container className="mb-10 flex items-center justify-center gap-4 text-white">
        {/* <Login /> */}
        <Register />
      </Container>
      <Footer />
    </>
  );
}

export default App;
