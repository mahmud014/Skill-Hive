import React, { use } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router";
import LoadingPage from "../Components/LoadingPage";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);

  if (loading) {
    return <LoadingPage></LoadingPage>;
  }
  if (user && user?.email) {
    return children;
  }
  return <Navigate to={"/dasboard/login"}></Navigate>;
};

export default PrivateRoute;
