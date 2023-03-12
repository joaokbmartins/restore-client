import { createBrowserRouter } from "react-router-dom";

import { catalogLoader } from "../../../src/features/catalog/Catalog";
import AboutPage from "../../features/about/AboutPage";
import Catalog from "../../features/catalog/Catalog";
import ProductDetails from "../../features/catalog/ProductDetails";
import ContactPage from "../../features/contact/ContactPage";
import HomePage from "../../features/home/HomePage";
import App from "../layout/App";
import ErrorPage from "../layout/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <HomePage /> },
      {
        path: "catalog",
        element: <Catalog />,
        loader: catalogLoader,
      },
      {
        path: "catalog/:id",
        element: <ProductDetails />,
      },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
    ],
  },
]);
