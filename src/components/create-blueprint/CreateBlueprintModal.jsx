import { useState } from "react";
import CreateBlueprintButton from "./CreateBlueprintButton";
import CreateBlueprintContent from "./CreateBlueprintContent";

const CreateBlueprintModal = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };
  return (
    <div>
      {/* modal trigger button */}
      <CreateBlueprintButton handleShowModal={handleShowModal} />
      {/* modal content */}
      {showModal && (
        <CreateBlueprintContent handleShowModal={handleShowModal} />
      )}
    </div>
  );
};

export default CreateBlueprintModal;
