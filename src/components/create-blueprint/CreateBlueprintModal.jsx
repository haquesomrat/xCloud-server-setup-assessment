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

  const handleNameChange = (e) => {
    setBlueprintName(e.target.value);
  };

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  const handleBlueprintNameSubmit = () => {
    if (blueprintName.length > 0) {
      setErrorStatus("success");
      setShowModal(false);
    } else {
      setErrorStatus("failed");
      setShowModal(true);
      setIsWarningOpen(true);
    }
  };

  useClickOutside(modalRef, () => setShowModal(false));

  return (
    <div>
      {/* modal trigger button */}
      <CreateBlueprintButton handleShowModal={handleShowModal} />

      {/* modal content */}
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
    </div>
  );
};

export default CreateBlueprintModal;
