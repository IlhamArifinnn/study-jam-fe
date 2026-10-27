import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* TODO 1.1 · Fase 1 · Modul Bab 3.2
        Bungkus <App /> dengan <BrowserRouter> dari "react-router". */}

    {/* TODO 3.4 · Fase 3 · Modul Bab 5.3
        Bungkus lagi dengan <WatchlistProvider>, DI DALAM <BrowserRouter>.
        Urutan akhir: StrictMode > BrowserRouter > WatchlistProvider > App */}

    <App />
  </StrictMode>
);
