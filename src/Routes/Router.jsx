import { createBrowserRouter } from "react-router";
import Root from "../Roots/Root";
import Home from "../Pages/Home";
import ErrorPage from "../Components/ErrorPage";
import LoadingPage from "../Components/LoadingPage";
import SkillDetails from "../Pages/SkillDetails";
import BrowseSkill from "../Pages/BrowseSkill";
import AboutPage from "../Pages/AboutPage";
import ContactPage from "../Pages/ContactPage";
import Login from "../Pages/Login";
import DasBoard from "../Roots/DasBoard";
import Register from "../Pages/Register";
import MyProfile from "../Pages/MyProfile";

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
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "/profile",
        element: <MyProfile />,
      },
    ],
  },
  {
    path: "dasboard",
    element: <DasBoard />,
    children: [
      {
        path: "/dasboard/login",
        element: <Login />,
      },
      {
        path: "/dasboard/register",
        element: <Register />,
      },
    ],
  },
]);
