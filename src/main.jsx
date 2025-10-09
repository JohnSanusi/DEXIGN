import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="bg-gradient-to-r from-[#0f172a] to-[#0a0f1c] text-gray-200 min-h-screen ">
      <App />
    </div>
  </StrictMode>
);
