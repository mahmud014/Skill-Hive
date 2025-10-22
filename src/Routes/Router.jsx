import { createBrowserRouter } from "react-router";
import Root from "../Roots/Root";
import Home from "../Pages/Home";
import ErrorPage from "../Components/ErrorPage";
import LoadingPage from "../Components/LoadingPage";
import SkillDetails from "../Pages/SkillDetails";
import BrowseSkill from "../Pages/BrowseSkill";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch("/Data.json"),
        hydrateFallbackElement: <LoadingPage />,
      },
      {
        path: "skill/:id",
        element: <SkillDetails />,
        loader: () => fetch("/Data.json"),
        hydrateFallbackElement: <LoadingPage />,
      },
      {
        path: "browseskills",
        element: <BrowseSkill />,
        loader: () => fetch("/Browser.json"),
        hydrateFallbackElement: <LoadingPage />,
      },
    ],
  },
]);
