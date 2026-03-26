import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

//redux
import { store } from "./Redux/store";
import { Provider } from "react-redux";

// router
import { RouterProvider } from "react-router";
import { router } from "./config/routes.jsx";

// react-query
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./config/queryClient";

//auth
import { AuthInitializer } from "./modules/auth/components/AuthInitializer/AuthInitializer";

import { Toaster } from "sonner";
import "./styles/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Toaster richColors position="top-right" />
        <AuthInitializer>
          <RouterProvider router={router} />
        </AuthInitializer>
      </QueryClientProvider>
    </Provider>
  </StrictMode>
);
