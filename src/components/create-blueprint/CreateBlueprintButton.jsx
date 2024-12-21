const CreateBlueprintButton = ({ handleShowModal }) => {
  return (
    <button
      type="button"
      onClick={handleShowModal}
      className="flex items-center p-3 gap-1 bg-[#147AFF] rounded text-white text-sm m-2"
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_411_5630)">
          <path
            d="M9 3.75V14.25"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.75 9H14.25"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_411_5630">
            <rect width="18" height="18" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <span>Create New Blueprint</span>
    </button>
  );
};

export default CreateBlueprintButton;
