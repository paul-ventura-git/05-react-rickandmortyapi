import { Outlet, Link } from "react-router-dom";
import MyNavbar from "../components/MyNavbar";
import MyFooter from "../components/MyFooter";

const Layout = () => {
  return (
    <>
      <MyNavbar></MyNavbar>
        <Outlet />
      <MyFooter></MyFooter>
    </>
  )
};

export default Layout;