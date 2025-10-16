import { Outlet } from "react-router";
import Navbar from "../Navbar";


export function Root() {
  return (
    <>
        <Navbar></Navbar>
        <Outlet></Outlet>
    </>
  );
}