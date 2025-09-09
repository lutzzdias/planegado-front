import { Link } from "@tanstack/react-router";
import { Logo } from "../assets/Logo";
import { LogOutIcon } from "lucide-react";

export function Navbar() {
  const handleLogout = () => console.debug("logout");

  return (
    <div className="grid grid-cols-3 items-center px-3 py-1">
      <Link
        to="."
        className="flex items-center justify-start gap-1 font-logo text-2xl font-bold"
      >
        <Logo className="h-18 w-18 text-primary" />
        Planegado
      </Link>
      <div className="flex justify-center gap-6">
        <Link to="." className="text-primary">
          Investidor
        </Link>
        <Link to=".">Produtor</Link>
      </div>
      <div className="flex justify-end">
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-4 py-1 hover:cursor-pointer"
        >
          Sair <LogOutIcon className="h-4 w-4 text-red-500" />
        </button>
      </div>
    </div>
  );
}
