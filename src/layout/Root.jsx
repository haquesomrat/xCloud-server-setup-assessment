import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Root = () => {
  return (
    <div className="bg-[#171A30]">
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
