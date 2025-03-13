import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddUsers from "./pages/AddUsers.tsx";
import ViewUsers from "./pages/ViewUsers.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<AddUsers />} path="/add" />
        <Route element={<ViewUsers />} path="/view" />
        <Route element={<App />} path="/" />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
