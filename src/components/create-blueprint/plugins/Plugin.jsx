import pluginImg from "/icons/plugin-icon.png";

const Plugin = ({ plugin }) => {
  const { selected } = plugin;
  return (
    <div className="bg-[#171A30] p-4 rounded-lg relative">
      <div>
        <div>
          <div>
            <img src={pluginImg} alt="plugin image" />
          </div>
        </div>

        <div>
          <h6>PLugin name</h6>
          <p>Have an existing website already? Select this option to Have</p>

          <p>
            By: <span>WPDeveloper</span>
          </p>
        </div>

        <div>
          {selected ? (
            <svg
              className="absolute top-2 right-2"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_411_5567)">
                <path
                  d="M2.5 10C2.5 10.9849 2.69399 11.9602 3.0709 12.8701C3.44781 13.7801 4.00026 14.6069 4.6967 15.3033C5.39314 15.9997 6.21993 16.5522 7.12987 16.9291C8.03982 17.306 9.01509 17.5 10 17.5C10.9849 17.5 11.9602 17.306 12.8701 16.9291C13.7801 16.5522 14.6069 15.9997 15.3033 15.3033C15.9997 14.6069 16.5522 13.7801 16.9291 12.8701C17.306 11.9602 17.5 10.9849 17.5 10C17.5 9.01509 17.306 8.03982 16.9291 7.12987C16.5522 6.21993 15.9997 5.39314 15.3033 4.6967C14.6069 4.00026 13.7801 3.44781 12.8701 3.0709C11.9602 2.69399 10.9849 2.5 10 2.5C9.01509 2.5 8.03982 2.69399 7.12987 3.0709C6.21993 3.44781 5.39314 4.00026 4.6967 4.6967C4.00026 5.39314 3.44781 6.21993 3.0709 7.12987C2.69399 8.03982 2.5 9.01509 2.5 10Z"
                  stroke="#147AFF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.5 10.0026L9.16667 11.6693L12.5 8.33594"
                  stroke="#147AFF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_411_5567">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          ) : (
            <span className="h-4 w-4 flex items-center justify-center border border-[#313A6C] absolute top-2 right-2 z-20 rounded-full m-1"></span>
          )}
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Plugin;
