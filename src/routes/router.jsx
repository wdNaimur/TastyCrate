import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import ErrorPage from "../layouts/ErrorPage";
import HomePage from "../pages/HomePage";
import PricingDetails from "../pages/PricingDetails";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import AuthenticationLayout from "../layouts/AuthenticationLayout";

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
        path: "about",
        element: <h1>About</h1>,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthenticationLayout />,
    children: [
      {
        path: "/auth/sign-in",
        element: <SignInPage />,
      },
      {
        path: "/auth/sign-up",
        element: <SignUpPage />,
      },
    ],
  },
]);

export default router;
