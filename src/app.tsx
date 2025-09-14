import "./app.css";
import { Routes } from "react-router";
import { Route } from "react-router";
import PortfolioPage from "./pages/portfolioPage.tsx";
import ContactPage from "./pages/contactPage.tsx";
import RootPage from "./pages/rootPage.tsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<RootPage />}>
        <Route index element={<PortfolioPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}
