import { Outlet } from "react-router";
import Header from "../components/header.tsx";
import Footer from "../components/footer.tsx";

export default function RootPage() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
