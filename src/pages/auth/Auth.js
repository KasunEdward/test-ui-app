import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

import React from 'react'
/**
 * Auth provider.
 *
 * @component
 */
const Auth = ({ allowedRoles }) => {
    const {auth} = useContext(AuthContext);
    const location = useLocation();

  return (
    allowedRoles.find(role => auth?.role == role)
     // auth.role.find(role => allowedRoles?.includes(role))
      ? <Outlet/>
      : auth?.name
        ? <Navigate to="/unauthorized" state={{ from: location}} replace/>
        : <Navigate to="/register" state={{from: location}} replace/>
  )
}

export default Auth;