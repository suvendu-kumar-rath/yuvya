import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import logo from "@/assets/logo.jpeg";

// Ensure favicon uses logo.jpeg
const setFavicon = (href: string) => {
  const ensureLink = (rel: string) => {
    let link = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.type = "image/jpeg";
    link.href = href;
  };

  ensureLink("icon");
  ensureLink("shortcut icon");
  ensureLink("apple-touch-icon");
};

setFavicon(logo);

createRoot(document.getElementById("root")!).render(<App />);
