import { NavLink } from "react-router";
import Button from "./Button";

export default function Header() {
  return (
    <header className="flex w-full justify-center border-b-8 border-b-orange-600 bg-[#161410] py-4 shadow-2xl">
      <div className="flex items-center justify-between">
        <div className="w-1/9">
          <img src="./logo.svg" alt="Madruga Burguer" className="" />
        </div>
        <NavLink to="/login">
          <Button variant="outline" title="Entrar" />
        </NavLink>
      </div>
    </header>
  );
}
