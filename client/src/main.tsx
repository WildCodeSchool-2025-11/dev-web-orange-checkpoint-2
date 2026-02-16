import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App";
import CupcakeDetails from "./pages/CupcakeDetails";
import CupcakeList from "./pages/CupcakeList";
import Home from "./pages/Home";
import Instructions from "./pages/Instructions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "instructions", element: <Instructions /> },
      { path: "cupcakes", element: <CupcakeList /> },
      { path: "cupcakes/:id", element: <CupcakeDetails /> },
    ],
  },
]);

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error('Missing <div id="root"></div>');

createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
