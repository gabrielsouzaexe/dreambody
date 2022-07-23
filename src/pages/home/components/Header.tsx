import { Button } from "../../../components/Button";

export default function Header() {
  return (
    <header className="h-28 bg-white z-50 shadow-lg flex justify-center sticky top-0">
      <div className="w-[90%] flex justify-around items-center">
        <img
          className="max-w-xs"
          src="/images/dreambody.png"
          alt="Dreambody Logo"
        />
        <ul className="flex items-center text-gray-800">
          <li className="m-5">Home</li>
          <li className="m-5">Sobre</li>
          <li className="m-5">Produtos</li>
          <li className="m-5">Contato</li>
        </ul>
        <div className="flex items-center">
          <button className="mx-2">Sign up</button>
          <Button value="Login" />
        </div>
      </div>
    </header>
  );
}
