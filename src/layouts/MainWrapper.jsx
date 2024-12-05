import { Outlet } from "react-router-dom";
import NavbarHome from "../components/NavbarHome";

function MainWrapper() {
  return (
    <div>
      <NavbarHome />
      <Outlet />
    </div>
  );
}

export default MainWrapper;
