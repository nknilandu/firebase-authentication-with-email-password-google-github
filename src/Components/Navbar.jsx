import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <>
      <div className="flex items-center justify-center gap-5 mb-5">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/forgotPassword">forgotPassword</NavLink>
      </div>
    </>
  );
}
