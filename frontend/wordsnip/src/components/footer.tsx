import { NavLink } from "react-router-dom";
import WordSnipLogo from "./wsLogo";

const Footer = () => {
  return (
    <footer className="bg-slate-50">
      <div
        className="
          mx-auto
          px-8
          grid
          gap-12
          md:grid-cols-4
        "
      >
        <div className="w-40 md:w-40 lg:w-40 py-8">
          <NavLink to="/">
            {/* Brand */}
            <WordSnipLogo />
          </NavLink>
        </div>

        {/* Navigation */}
      </div>

      {/* Bottom bar */}
      <div
        className="
          border-t
          border-white/10
          py-6
          text-center
          text-gray-500
          text-sm
        "
      >
        &copy; {new Date().getFullYear()} WordSnip. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
