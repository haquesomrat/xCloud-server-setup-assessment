import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useModal } from "../components/Context/ModalProvider";

const Root = () => {
  const { showModal } = useModal();

  return (
    <div className={`bg-[#171A30] ${showModal && " h-screen overflow-hidden"}`}>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
