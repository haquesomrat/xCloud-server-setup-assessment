import { useRef, useState } from "react";
import CreateBlueprintButton from "./CreateBlueprintButton";
import CreateBlueprintContent from "./CreateBlueprintContent";
import useClickOutside from "../../hooks/useClickOutside";

const CreateBlueprintModal = () => {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);

  const handleShowModal = () => {
    setShowModal(!showModal);
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
        />
      )}
    </div>
  );
};

export default CreateBlueprintModal;
