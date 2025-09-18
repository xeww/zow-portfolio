import "./app.css";
import { Routes } from "react-router";
import { Route } from "react-router";
import Portfolio from "@/pages/portfolio/portfolio.tsx";
import Contact from "@/pages/contact/contact.tsx";
import Root from "@/pages/root.tsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route index element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
