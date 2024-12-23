import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Blueprints from "./pages/Blueprints";
import Root from "./layout/Root";
import { FormProvider } from "./Context/FormProvider";
import { ModalProvider } from "./Context/ModalProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blueprints",
        element: <Blueprints />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FormProvider>
      <ModalProvider>
        <RouterProvider router={router} />
      </ModalProvider>
    </FormProvider>
  </StrictMode>
);
