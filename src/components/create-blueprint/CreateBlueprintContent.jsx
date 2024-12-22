import BlueprintNameInput from "./BlueprintNameInput";
import CreateBlueprintTab from "./CreateBlueprintTab";
import ModalWarning from "./ModalWarning";
import TabFooter from "./TabFooter";

const CreateBlueprintContent = ({
  modalRef,
  handleShowModal,
  blueprintName,
  handleNameChange,
  errorStatus,
  handleBlueprintNameSubmit,
  isWarningOpen,
  setIsWarningOpen,
}) => {
  return (
    <div className="bg-[#171A30CC] fixed inset-0 flex flex-col items-center justify-center z-40">
      <div className="overflow-auto space-y-3.5 py-8 lg:py-4 w-full">
        <div
          ref={modalRef}
          className="flex flex-col gap-3.5 items-center justify-center max-w-[1050px] mx-auto"
        >
          {/* modal warning */}
          {isWarningOpen && (
            <ModalWarning setIsWarningOpen={setIsWarningOpen} />
          )}

          {/* modal content */}
          <div className="w-full max-w-[1050px] px-4 xl:px-0 relative overflow-auto">
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
                <BlueprintNameInput
                  blueprintName={blueprintName}
                  handleNameChange={handleNameChange}
                  errorStatus={errorStatus}
                />
              </div>

              {/* tab contents */}
              <CreateBlueprintTab />
            </div>

            {/* tab footer */}
            <TabFooter handleBlueprintNameSubmit={handleBlueprintNameSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBlueprintContent;
