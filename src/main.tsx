import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import Flowers from "./pages/Flowers/Flowers";
import NavBar from "./components/NavBar";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flowers" element={<Flowers />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
