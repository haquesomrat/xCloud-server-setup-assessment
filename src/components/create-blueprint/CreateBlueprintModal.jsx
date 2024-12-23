import { useRef, useState } from "react";
import CreateBlueprintButton from "./CreateBlueprintButton";
import CreateBlueprintContent from "./CreateBlueprintContent";
import useClickOutside from "../../hooks/useClickOutside";
import { useModal } from "../Context/ModalProvider";

const CreateBlueprintModal = () => {
  const modalRef = useRef(null);

  const { showModal, setShowModal } = useModal();
  const [blueprintName, setBlueprintName] = useState("");
  const [errorStatus, setErrorStatus] = useState("");
  const [isWarningOpen, setIsWarningOpen] = useState(false);

  // handle blueprint name change
  const handleNameChange = (e) => {
    setBlueprintName(e.target.value);
  };

  // handle modal
  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  // handle blueprint name submit
  const handleBlueprintNameSubmit = () => {
    if (blueprintName.length > 0) {
      setErrorStatus("success");
      setShowModal(false);
      setIsWarningOpen(false);
    } else {
      setErrorStatus("failed");
      setShowModal(true);
      setIsWarningOpen(true);
    }
  };

  // handle click outside
  useClickOutside(modalRef, () => setShowModal(false));

  return (
    <div>
      {/* start::Modal Trigger */}
      <CreateBlueprintButton handleShowModal={handleShowModal} />
      {/* end::Modal Trigger */}

      {/* start::Modal Content */}
      {showModal && (
        <CreateBlueprintContent
          modalRef={modalRef}
          handleShowModal={handleShowModal}
          blueprintName={blueprintName}
          handleBlueprintNameSubmit={handleBlueprintNameSubmit}
          handleNameChange={handleNameChange}
          errorStatus={errorStatus}
          isWarningOpen={isWarningOpen}
          setIsWarningOpen={setIsWarningOpen}
        />
      )}
      {/* end::Modal Content */}
    </div>
  );
};

export default CreateBlueprintModal;
