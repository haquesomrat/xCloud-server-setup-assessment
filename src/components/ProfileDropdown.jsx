import { Link } from "react-router-dom";
import profileAvatar from "/profile-avatar.png";
import { useRef, useState } from "react";
import { dropdownItems } from "../fake-data/dropdownItems";
import useClickOutside from "../hooks/useClickOutside";

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useClickOutside(dropdownRef, () => setIsOpen(false));

  return (
    <div ref={dropdownRef}>
      {/* dropdown trigger */}
      <button
        onClick={handleDropdown}
        className="flex items-center gap-2 md:gap-2.5 border border-[#171A30] rounded-[10px] p-1"
      >
        <img src={profileAvatar} alt="avatar" />
        <p className="hidden md:inline font-medium tracking-tight">Mark Adam</p>
        <div className="h-5 w-5 rounded flex items-center justify-center bg-[#171A30] ml-[3px] mr-2.5">
          <svg
            className={`${isOpen ? "rotate-180" : "rotate-0"} duration-300`}
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.00048 3.78047L8.30048 0.480469L9.24315 1.42314L5.00048 5.6658L0.757812 1.42314L1.70048 0.480469L5.00048 3.78047Z"
              fill="#C1C9DE"
            />
          </svg>
        </div>
      </button>

      {/* dropdown content */}
      <div
        className={`${
          isOpen
            ? "block w-[200px] md:w-full absolute top-[calc(100%+8px)] right-0 bg-[#2a3268] rounded "
            : "hidden"
        }`}
      >
        <ul className="py-2 flex flex-col">
          {dropdownItems.map((item, index) => (
            <Link key={index} to={item.href}>
              <li className="px-6 py-2 hover:bg-[#2DC774] text-sm">
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProfileDropdown;
