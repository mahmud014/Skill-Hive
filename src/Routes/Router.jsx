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
import PrivateRoute from "../Provider/PrivateRoute";

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
        path: "browseskills",
        element: (
          <PrivateRoute>
            <BrowseSkill />
          </PrivateRoute>
        ),
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
        element: (
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "skill/:id",
    element: (
      <PrivateRoute>
        <SkillDetails />
      </PrivateRoute>
    ),
    loader: () => fetch("/Data.json"),
    hydrateFallbackElement: <LoadingPage />,
  },
  {
    path: "dashboard",
    element: <DasBoard />,
    children: [
      {
        path: "/dashboard/login",
        element: <Login />,
      },
      {
        path: "/dashboard/register",
        element: <Register />,
      },
    ],
  },
]);
