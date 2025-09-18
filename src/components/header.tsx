import { Link, NavLink, useLocation } from "react-router";
import { ShoppingBagIcon } from "lucide-react";
import { scrollToTop } from "@/utils.ts";

export default function Header() {
  return (
    <header className="border-light-dark bg-default-dark/85 fixed left-0 z-50 flex w-full items-center justify-between rounded-b-2xl border-b-2 p-3 backdrop-blur-md sm:px-12 sm:py-5 lg:px-24">
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
    <h1
      className="font-special cursor-pointer text-5xl font-bold text-white"
      onClick={scrollToTop}
    >
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
        "hover:text-green-primary font-display mx-2 text-xl font-bold transition duration-300 ease-in-out sm:mx-4 lg:mx-6 " +
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
      className="hover:bg-green-primary font-display text-green-primary border-green-primary hover:text-default-dark/85 hidden items-center gap-2 rounded-3xl border-2 px-6 py-2 text-xl font-bold transition duration-250 ease-in-out sm:flex"
    >
      <ShoppingBagIcon />
      BuiltByBit
    </Link>
  );
}
