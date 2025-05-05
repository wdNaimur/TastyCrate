import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import ErrorPage from "../layouts/ErrorPage";
import HomePage from "../pages/HomePage";
import PricingDetails from "../pages/PricingDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: () => fetch("/data/testimonials.json"),
      },
      {
        path: "pricing/:slug",
        element: <PricingDetails />,
        errorElement: <ErrorPage />,
        loader: () => fetch("/data/pricingCard.json"),
      },
      {
        path: "auth",
        element: <h1>Auth</h1>,
      },
      {
        path: "about",
        element: <h1>About</h1>,
      },
    ],
  },
]);

export default router;
