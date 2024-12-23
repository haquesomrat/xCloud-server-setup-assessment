import BlueprintNameInput from "../../create-blueprint/BlueprintNameInput";
import CreateBlueprintTab from "../../create-blueprint/CreateBlueprintTab";
import ModalFooter from "./ModalFooter";
import ModalWarning from "./ModalWarning";

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
    <div className="xc-create-blueprint-content">
      <div className="overflow-auto space-y-3.5 py-8 lg:py-4 w-full">
        <div
          ref={modalRef}
          className="xc-middle flex-col gap-3.5 max-w-lg mx-auto"
        >
          {/* start:: Modal Warning */}
          {isWarningOpen && (
            <ModalWarning setIsWarningOpen={setIsWarningOpen} />
          )}
          {/* end:: Modal Warning */}

          {/* start::Modal Content */}
          <div className="xc-modal-content">
            <div className=" bg-xc-foreground p-4 md:p-8 rounded-lg">
              {/* start::Modal Title and Exit Button  */}
              <div className="xc-between pb-4 md:pb-8">
                <h1 className="xc-modal-title">Create Blueprint</h1>

                <button
                  className="h-6 w-6 inline-flex justify-center items-center border border-xc-text rounded-lg"
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
              {/* end::Modal Title and Exit Button  */}

              {/* start::Blueprint Name Input */}
              <div>
                <BlueprintNameInput
                  blueprintName={blueprintName}
                  handleNameChange={handleNameChange}
                  errorStatus={errorStatus}
                />
              </div>
              {/* end::Blueprint Name Input */}

              {/* tab contents */}
              <CreateBlueprintTab />
            </div>

            {/* Start:: Modal Footer */}
            <ModalFooter
              handleBlueprintNameSubmit={handleBlueprintNameSubmit}
            />
            {/* End:: Modal Footer */}
          </div>
          {/* end::Modal Content */}
        </div>
      </div>
    </div>
  );
};

export default CreateBlueprintContent;
