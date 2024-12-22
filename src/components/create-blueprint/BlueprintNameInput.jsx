const BlueprintNameInput = ({
  blueprintName,
  handleNameChange,
  errorStatus,
}) => {
  return (
    <div className="flex gap-2 items-center relative">
      <svg
        className="absolute left-[29px]"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_411_8054)">
          <path
            d="M4 20.0003H8L18.5 9.5003C18.7626 9.23766 18.971 8.92585 19.1131 8.58269C19.2553 8.23953 19.3284 7.87174 19.3284 7.5003C19.3284 7.12887 19.2553 6.76107 19.1131 6.41791C18.971 6.07475 18.7626 5.76295 18.5 5.5003C18.2374 5.23766 17.9256 5.02932 17.5824 4.88718C17.2392 4.74503 16.8714 4.67187 16.5 4.67188C16.1286 4.67188 15.7608 4.74503 15.4176 4.88718C15.0744 5.02932 14.7626 5.23766 14.5 5.5003L4 16.0003V20.0003Z"
            stroke={errorStatus === "failed" ? "#FC573B" : "white"}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.5 6.5L17.5 10.5"
            stroke={errorStatus === "failed" ? "#FC573B" : "white"}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_411_8054">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <input
        className={`bg-transparent w-full focus-visible:outline-0 text-[#919DB9] text-base px-[61px] py-4 border rounded border-[#313A6C] ${
          errorStatus === "failed" &&
          "border-[#FC573B] placeholder:text-[#FC573B]"
        } ${errorStatus === "success" && "border-[#32BA7C]"} `}
        type="text"
        name="blueprintName"
        placeholder="Name your blueprint"
        value={blueprintName}
        onChange={handleNameChange}
      />
    </div>
  );
};

export default BlueprintNameInput;
