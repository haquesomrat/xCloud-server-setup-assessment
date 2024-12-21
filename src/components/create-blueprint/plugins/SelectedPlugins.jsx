import { allPlugins } from "../../../fake-data/allPlugins";

const SelectedPlugins = () => {
  return (
    <div className="flex flex-wrap items-center gap-x-1 gap-y-4">
      {allPlugins.map((plugin) => (
        <div
          key={plugin.id}
          style={{ backgroundColor: plugin.bgColor, color: plugin.textColor }}
          className="border border-transparent rounded-lg h-12 w-12 flex items-center justify-center relative group cursor-pointer hover:-translate-y-[14px] transition-transform duration-300 ease-in-out"
        >
          <p className="text-2xl font-semibold">{plugin.fallbackIcon}</p>

          {/* selected tick */}
          <span className="w-4 h-4 flex items-center justify-center border border-[#1D2239] bg-[#2DC774] rounded-full absolute -top-[3px] -right-[3px] group-hover:hidden">
            <svg
              width="10"
              height="8"
              viewBox="0 0 10 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 4L4 6.5L9 1.5"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>

          {/* removal icon */}
          <span className="w-4 h-4 hidden group-hover:flex items-center justify-center border border-[#1D2239] bg-white rounded-full absolute -top-[3px] -right-[3px] ">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_411_7183)">
                <path
                  d="M9 3L3 9"
                  stroke="#FC573B"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 3L9 9"
                  stroke="#FC573B"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_411_7183">
                  <rect width="12" height="12" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>

          {/* tooltip */}
          <div className="absolute -top-9 text-white bg-[#232A4E] py-1.5 px-3 rounded-lg hidden group-hover:flex whitespace-nowrap">
            <p className="text-xs">Plugin Name</p>
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-2.5 rotate-[270deg] w-0 h-0 border-t-[8px] border-t-transparent border-r-[8px] border-r-[#232A4E]  border-b-[8px] border-b-transparent"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SelectedPlugins;
