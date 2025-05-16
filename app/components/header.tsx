import { NavLink } from "react-router";

export default function Header() {
  return (
    <>
      <header className="flex justify-between items-center mx-4 md:mx-24 my-8 my bg-white">
        <img
          className="w-36 h-12 md:w-48 md:h-14"
          src="/app/assets/LOGO.png"
          alt="Logo"
        />
        <nav className="flex justify-center items-center w-100%">
          <ul className="flex justify-between items-center w-100% md:gap-8">
            <li className="px-2">
              <NavLink
                to="/"
                className=" text-black hover:underline  text-[12px] md:text-2xl"
              >
                <p className="block md:hidden">ACCUEIL</p>
                <p className="hidden md:block"> Accueil </p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className=" text-black  hover:underline text-[12px] md:text-2xl"
              >
                <p className="block md:hidden"> À PROPOS</p>
                <p className="hidden md:block"> À propos </p>
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
