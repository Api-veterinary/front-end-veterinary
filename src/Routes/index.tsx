import { Routes, Route } from "react-router-dom";
import { Login } from "../Pages/Login";
import { SignUp } from "../Pages/Register";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<SignUp />} />
    </Routes>
  );
};
