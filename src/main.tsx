import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Provider } from "react-redux";
import store from "@/redux/store";

import App from "@/components/App";

import "@/index.css";

const element = document.getElementById("root")!;

createRoot(element).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
