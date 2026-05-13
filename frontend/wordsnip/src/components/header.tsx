import { useState } from "react";
import { NavLink } from "react-router-dom";
import WordSnipLogo from "./wsLogo";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `transition hover:text-blue-600 ${
      isActive ? "text-blue-600 font-semibold" : "text-[#1E2A44]-700"
    }`;

  return (
    <header
      className="
        sticky
        top-0
        z-50
        backdrop-blur-lg
        bg-slate-50
        border-b
        border-gray-200
      "
    >
      <nav
        className="
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
          h-16
          flex
          items-center
          justify-between
        "
      >
        {/* Logo */}
        <div className="w-40 md:w-40 lg:w-40 py-8">
          <NavLink to="/">
            <WordSnipLogo />
          </NavLink>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </div>

        {/* Mobile button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="
            md:hidden
            px-4
            pb-4
            flex
            flex-col
            gap-4
            bg-slate-50
            border-t
            border-gray-200
          "
        >
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Header;
