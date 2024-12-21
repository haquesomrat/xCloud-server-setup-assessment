import CreateBlueprintTab from "./CreateBlueprintTab";

const CreateBlueprintContent = ({ handleShowModal }) => {
  return (
    <div className="bg-black/50 fixed inset-0 flex items-center justify-center z-50">
      <div className="w-full max-w-[1050px] bg-[#1D2239] p-4 md:p-8 rounded-lg mx-4">
        <div className="flex justify-between items-center pb-4 md:pb-8">
          <h1 className="text-white text-2xl md:text-3xl">Create Blueprint</h1>
          <button
            className="h-6 w-6 inline-flex justify-center items-center border border-[#919DB9] rounded-lg"
            onClick={handleShowModal}
          >
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.33594 1.33203L6.66927 6.66536M6.66927 1.33203L1.33594 6.66536"
                stroke="#919DB9"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div>
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
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.5 6.5L17.5 10.5"
                  stroke="white"
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
              className="bg-transparent w-full focus-visible:outline-0 text-[#919DB9] text-base px-[61px] py-4 border border-[#313A6C] rounded"
              type="text"
              placeholder="Name your blueprint"
            />
          </div>
        </div>

        {/* tab contents */}
        <CreateBlueprintTab />
      </div>
    </div>
  );
};

export default CreateBlueprintContent;
