import { isRouteErrorResponse, Links, Meta, Outlet } from "react-router";
import { NavLink } from "react-router-dom";

import type { Route } from "./+types/root";
import "./app.css";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {/* Header */}
        <header className="flex justify-between items-center mx-4 md:mx-24 my-8 my bg-white">
          <img
            className="w-36 h-12 md:w-48 md:h-14"
            src="./app/assets/LOGO.png"
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
        {children}

        {/* Footer */}
        <footer className="flex justify-center align-center items-center px-12 py-24 bg-black">
          <div className="flex flex-col justify-center items-center gap-4">
            <img src="./app/assets/white_LOGO.png" alt="Logo" />
            <p className="montserrat text-white text-[12px] md:text-xl">
              © 2020 Kasa. All rights reserved
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
