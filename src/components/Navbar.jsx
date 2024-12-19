import xCloudLogo from "/xCloudLogo.png";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-[#171A30] py-[25px] px-[50px]">
      <div>
        <img className="" src={xCloudLogo} alt="Logo" />
      </div>
      <div className="text-white flex">
        <h2>Bell Icon</h2>
        <div>Profile dropdown</div>
      </div>
    </div>
  );
};

export default Navbar;
