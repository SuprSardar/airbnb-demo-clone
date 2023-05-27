import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { $ } from "./utilities";

import App from "./App";
import ErrorBoundary from "@/components/error-boundary";

createRoot($("#root") as HTMLElement).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>
);
