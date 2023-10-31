import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ user, children }) => {
  return (
    //children은 react안에서 쓰는 Props (따로 user처럼 app.js에서 안줘도 됨)
    //user값이 있으면, Todopage : redirect to /login
    user ? children : <Navigate to="/login" />
  );
};

export default PrivateRoute;
