import BlueprintNameInput from "./BlueprintNameInput";
import CreateBlueprintTab from "./CreateBlueprintTab";

const CreateBlueprintContent = ({ modalRef, handleShowModal }) => {
  return (
    <div className="bg-[#171A30CC] fixed inset-0 flex items-center justify-center z-50">
      <div
        ref={modalRef}
        className="w-full max-w-[1050px] px-4 xl:px-0 relative"
      >
        <div className=" bg-[#1D2239] p-4 md:p-8 rounded-lg">
          {/* Modal title and exit button  */}
          <div className="flex justify-between items-center pb-4 md:pb-8">
            <h1 className="text-white text-2xl md:text-3xl">
              Create Blueprint
            </h1>
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

          {/* blueprint name input */}
          <div>
            <BlueprintNameInput />
          </div>

          {/* tab contents */}
          <CreateBlueprintTab />
        </div>

        {/* tab footer */}
        <div className="bg-[#232A4E] py-3 md:py-4 px-8 md:px-14 rounded-b-lg absolute bottom-0 left-4 xl:left-0 right-4 xl:right-0 text-right">
          <button
            onClick={handleShowModal}
            type="button"
            className="bg-[#147AFF] py-3 px-8 rounded-lg text-base text-white"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateBlueprintContent;
