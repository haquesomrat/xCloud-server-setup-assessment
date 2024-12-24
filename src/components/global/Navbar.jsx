import ProfileDropdown from "./ProfileDropdown";
import xCloudLogo from "/xCloudLogo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-xc-foreground">
      <div className="max-w-2xl mx-auto xc-between p-4 md:py-[25px] xl:px-[50px]">
        {/* start:: Logo */}
        <Link to="/">
          <img src={xCloudLogo} alt="Logo" />
        </Link>
        {/* end:: Logo */}

        {/* start:: Notification & Profile Dropdown Content */}
        <div className="text-white inline-flex items-center gap-4 relative">
          <div>
            {/* start::Notification Icon */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_411_5655)">
                <path
                  d="M20 17H22V19H2V17H4V10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10V17ZM18 17V10C18 8.4087 17.3679 6.88258 16.2426 5.75736C15.1174 4.63214 13.5913 4 12 4C10.4087 4 8.88258 4.63214 7.75736 5.75736C6.63214 6.88258 6 8.4087 6 10V17H18ZM9 21H15V23H9V21Z"
                  fill="#C1C9DE"
                />
              </g>
              <defs>
                <clipPath id="clip0_411_5655">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            {/* end::Notification Icon */}

            {/* start:: Notification Active Status */}
            <div className="h-[7px] w-[7px] bg-[#2DC774] rounded-full absolute top-2.5 left-5"></div>
            {/* end:: Notification Active Status */}
          </div>

          {/* start:: Profile Dropdown */}
          <ProfileDropdown />
          {/* end:: Profile Dropdown */}
        </div>
        {/* end:: Notification & Profile Dropdown Content */}
      </div>
    </div>
  );
};

export default Navbar;