import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import Flowers from "./pages/Flowers/Flowers";
import Login from "./pages/Login/Login";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="/us">
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/home" element={<Home />} />
        <Route path="/flowers" element={<Flowers />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
