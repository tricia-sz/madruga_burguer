import Button from "./Button";

export default function Footer() {
  return (
    <header className="flex w-full justify-center border-t-8 border-t-orange-600 bg-[#161410] shadow-2xl">
      <div className="flex items-center justify-center">
        <div className="w-1/9">
          <img src="./logo2.svg" alt="Madruga Burguer" className="" />
        </div>
        <div>
          {/* <Button className="w-28 rounded-full bg-orange-300 py-3"></Button> */}
        </div>
      </div>
    </header>
  );
}
