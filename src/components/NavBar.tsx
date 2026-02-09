import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // ícones leves
import { verifyLogin } from "../functions/verifyLogin";

export default function NavBar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [isLogged, setLogged] = useState<boolean | null>(false);

  React.useEffect(() => {
    verifyLogin().then((res) => {
      setLogged(res);
    });
  }, [])

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-[#101018] border-b border-[#1e1e2b] text-white relative">
      {/* Logo */}
      <Link draggable={false} to="/" className="flex items-center text-xl font-semibold tracking-wide">
        <img src="/favicon.ico" alt=" " className="w-8 h-8 rounded-md mx-2" />
        VShelf
      </Link>

      {/* Botão hamburguer (aparece no mobile) */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-gray-300 focus:outline-none"
      >
        {menuOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      {/* Menu desktop */}
      <nav className="hidden md:flex items-center gap-6">
        <Link draggable={false} to="/discord" className="text-blue-400 text-lg font-semibold hover:text-blue-300 transition">
          Discord
        </Link>
        <Link draggable={false} to="/download" className="text-green-400 text-lg font-semibold hover:text-green-300 transition">
          Download
        </Link>
        <p className="text-sm text-gray-400">
          <Link
            to={
              isLogged
                ? "/auth/logout"
                // : `https://auth.vshelf.app?after_login=${location.href}auth/sucess`
                : '/login'
            }
          >
            <span className="text-[#9d7bff] hover:text-[#b69efffd] text-xl font-semibold tracking-wide">
              {isLogged ? "Logout" : "Login"}
            </span>
            {/* <span className="hover:text-[#9d7bff] text-gray-500 transition-colors cursor-pointer">
              {isLogged ? "Perfil" : "Login"}
            </span> */}
          </Link>
        </p>
      </nav>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0c0c12] border-b border-[#333] md:hidden animate-fadeIn">
          <div className="flex flex-col items-center py-4 space-y-3 text-base">
            <Link
              to="/discord"
              className="text-blue-400 font-medium hover:text-blue-300 transition"
              onClick={() => setMenuOpen(false)}
              draggable={false}
            >
              Discord
            </Link>
            <Link
              to="/download"
              className="text-green-400 font-medium hover:text-green-300 transition"
              onClick={() => setMenuOpen(false)}
              draggable={false}
            >
              Download
            </Link>
            <Link
            draggable={false}
              to={
                isLogged
                  ? "perfil"
                  // : `https://auth.vshelf.app?after_login=${location.href}auth/sucess`
                  : "login"
              }
              onClick={() => setMenuOpen(false)}
              className="text-gray-400 hover:text-[#9d7bff] transition"
            >
              {isLogged ? "Perfil" : "Login"}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
