const ModalWarning = ({ setIsWarningOpen }) => {
  return (
    <div className="px-4 xl:px-0 w-full max-w-lg">
      <div className="px-4 md:px-6 py-3 xc-between gap-2.5  bg-[#F8A6430A] border border-[#F8A64366] rounded ">
        {/* start::Warning icon */}
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_411_9250)">
            <path
              d="M9 6.75V9.75"
              stroke="#F8A643"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.77187 2.69242L1.69237 12.8429C1.56704 13.06 1.50072 13.306 1.50001 13.5566C1.49929 13.8073 1.5642 14.0537 1.68828 14.2715C1.81237 14.4892 1.9913 14.6707 2.20728 14.7978C2.42326 14.925 2.66876 14.9933 2.91937 14.9962H15.0799C15.3304 14.9933 15.5758 14.9249 15.7916 14.7978C16.0075 14.6707 16.1864 14.4893 16.3104 14.2717C16.4345 14.054 16.4994 13.8077 16.4988 13.5572C16.4982 13.3067 16.432 13.0607 16.3069 12.8437L10.2274 2.69167C10.0995 2.48054 9.91928 2.30597 9.70421 2.18481C9.48915 2.06365 9.24647 2 8.99962 2C8.75278 2 8.5101 2.06365 8.29504 2.18481C8.07997 2.30597 7.89978 2.48054 7.77187 2.69167V2.69242Z"
              stroke="#F8A643"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 12H9.01"
              stroke="#F8A643"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_411_9250">
              <rect width="18" height="18" fill="white" />
            </clipPath>
          </defs>
        </svg>
        {/* end::Warning icon */}

        {/* start::Warning Text */}
        <span className="text-[#A1A7BA] text-sm leading-none mr-auto">
          Warning: You must create a name for your Blueprint
        </span>
        {/* end::Warning Text */}

        {/* start::Warning Close Icon */}
        <div className="h-4 w-4 xc-middle cursor-pointer">
          <svg
            onClick={(prev) => setIsWarningOpen(!prev)}
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_411_9256)">
              <path
                d="M6.66797 6.66406L9.33464 9.33073M9.33464 6.66406L6.66797 9.33073"
                stroke="#F8A643"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 2C12.8 2 14 3.2 14 8C14 12.8 12.8 14 8 14C3.2 14 2 12.8 2 8C2 3.2 3.2 2 8 2Z"
                stroke="#F8A643"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_411_9256">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        {/* end::Warning Close Icon */}
      </div>
    </div>
  );
};

export default ModalWarning;
