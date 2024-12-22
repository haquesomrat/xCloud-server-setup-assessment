import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
// import { useContext } from "react";

const Root = () => {
  // const blueprintsContext = useContext(null);

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
