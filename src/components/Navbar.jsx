import xCloudLogo from "/xCloudLogo.png";
import bellIcon from "/icons/notification-bell.png";
import profileAvatar from "/profile-avatar.png";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-[#171A30] px-4 py-6  md:py-[25px] md:px-[50px]">
      <div>
        <img className="" src={xCloudLogo} alt="Logo" />
      </div>
      <div className="text-white inline-flex items-center gap-4">
        <div>
          <img className="" src={bellIcon} alt="notification icon" />
        </div>
        <div>
          <img src={profileAvatar} alt="avatar" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
