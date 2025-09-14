import { Outlet } from "react-router";
import Header from "../components/header.tsx";

export default function RootPage() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
