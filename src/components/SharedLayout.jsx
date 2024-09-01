import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

const SharedLayout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
      <p>Hello world!</p>
    </>
  );
};

export default SharedLayout;
