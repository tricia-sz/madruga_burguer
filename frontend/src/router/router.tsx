import { createBrowserRouter, Outlet } from "react-router";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";

const Layout = () => {
  return (
   <div className="min-h-screen bg-red-500">
     <Header />
      <Outlet />
      <Footer />
   </div>
  );
};

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: = [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
