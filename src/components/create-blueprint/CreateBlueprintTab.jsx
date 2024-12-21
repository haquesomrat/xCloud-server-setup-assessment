import { useState } from "react";
import Plugins from "./plugins/Plugins";

const tabsData = [
  {
    id: "1",
    label: "Themes",
    content: "Content for Tab 1 (themes)",
  },
  {
    id: "2",
    label: "Plugins",
    content: <Plugins />,
  },
  {
    id: "3",
    label: "Popular Plugins",
    content: <Plugins />,
  },
];

const CreateBlueprintTab = () => {
  const [activeTab, setActiveTab] = useState(tabsData[1].id);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
  return (
    <div className="pt-4">
      {/* tabllist */}
      <div className="bg-[#171A30] flex flex-col sm:flex-row items-center justify-between">
        <div className="flex items-center overflow-x-auto">
          {tabsData.map((tab) => (
            <button
              type="button"
              key={tab.id}
              className={`text-white p-3 sm:p-5 border-b-[2px] whitespace-nowrap ${
                activeTab === tab.id ? "border-white" : "border-transparent"
              }`}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mr-[7px] relative py-5 sm:py-0">
          <input
            className="bg-[#1D2239] rounded-lg py-2.5 pl-4 pr-10 w-full lg:w-[311px] text-[#74778E] focus-visible:outline-0"
            type="text"
            placeholder="Search"
          />
          <svg
            className="absolute right-2 top-1/2 -translate-y-1/2"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_411_7026)">
              <path
                d="M4 11C4 11.9193 4.18106 12.8295 4.53284 13.6788C4.88463 14.5281 5.40024 15.2997 6.05025 15.9497C6.70026 16.5998 7.47194 17.1154 8.32122 17.4672C9.1705 17.8189 10.0807 18 11 18C11.9193 18 12.8295 17.8189 13.6788 17.4672C14.5281 17.1154 15.2997 16.5998 15.9497 15.9497C16.5998 15.2997 17.1154 14.5281 17.4672 13.6788C17.8189 12.8295 18 11.9193 18 11C18 10.0807 17.8189 9.1705 17.4672 8.32122C17.1154 7.47194 16.5998 6.70026 15.9497 6.05025C15.2997 5.40024 14.5281 4.88463 13.6788 4.53284C12.8295 4.18106 11.9193 4 11 4C10.0807 4 9.1705 4.18106 8.32122 4.53284C7.47194 4.88463 6.70026 5.40024 6.05025 6.05025C5.40024 6.70026 4.88463 7.47194 4.53284 8.32122C4.18106 9.1705 4 10.0807 4 11Z"
                stroke="#C1C9DE"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20 20L16 16"
                stroke="#C1C9DE"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_411_7026">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>

      {/* tab contents */}
      <div className="mt-8">
        {tabsData.map((tab) => (
          <div
            key={tab.id}
            className={`${activeTab === tab.id ? "block" : "hidden"}`}
          >
            {tab.content}
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default CreateBlueprintTab;
