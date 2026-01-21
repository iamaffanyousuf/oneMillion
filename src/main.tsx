// import { createRoot } from "react-dom/client";
// import App from "./App.tsx";
// import "./index.css";

// const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

// if (prefersDark) {
//   document.documentElement.classList.add("dark");
// }

// createRoot(document.getElementById("root")!).render(<App />);

import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

// System dark mode detection
if (typeof window !== "undefined") {
  const prefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  if (prefersDark) {
    document.documentElement.classList.add("dark");
  }
}

const root = document.getElementById("root");

if (!root) {
  throw new Error("Root element not found");
}

createRoot(root).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
