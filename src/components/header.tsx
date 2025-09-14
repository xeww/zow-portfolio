import { Link, NavLink, useLocation } from "react-router";
import { ShoppingBagIcon } from "lucide-react";

export default function Header() {
  return (
    <header className="border-light-dark bg-default-dark/85 fixed left-0 z-50 flex w-full items-center justify-between border-b-2 p-3 backdrop-blur-md sm:px-12 sm:py-5">
      <Title />
      <div>
        <NavButton text="Portfolio" to="/" />
        <NavButton text="Contact" to="/contact" />
      </div>
      <BuiltByBit />
    </header>
  );
}

function Title() {
  return (
    <h1 className="font-special cursor-pointer text-5xl font-bold text-white">
      Zow's Builds
    </h1>
  );
}

function NavButton({ text, to }: { text: string; to: string }) {
  const location = useLocation();
  return (
    <NavLink
      to={to}
      className={
        "hover:text-green-primary font-display m-2 text-xl font-bold " +
        (location.pathname === to
          ? "text-green-primary border-green-primary border-b-2"
          : "text-white")
      }
    >
      {text}
    </NavLink>
  );
}

function BuiltByBit() {
  return (
    <Link
      to="https://builtbybit.com/creators/ikwoz.445348"
      className="font-display text-green-primary border-green-primary hidden items-center gap-2 rounded-3xl border-2 px-6 py-2 text-xl font-bold sm:flex"
    >
      <ShoppingBagIcon />
      BuiltByBit
    </Link>
  );
}
