import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthStatus } from "../Hooks/useAuthStatus";
import Spinner from "./Spinner";
//checking if we are logged in firebase
const PrivateRoute = () => {
  const { loggedIn, checkingStatus } = useAuthStatus();
  console.log("show status", checkingStatus);

  if (checkingStatus) {
    return <Spinner />;
  }

  return loggedIn ? <Outlet /> : <Navigate to="/sign-in" />;
};
export default PrivateRoute;
