import { useState } from "react";
// import { allBlueprints } from "../../fake-data/allBlueprints.js";
// import { Link } from "react-router-dom";
// import CreateBlueprintModal from "../create-blueprint/CreateBlueprintModal.jsx";
import ServerTypes from "./ServerTypes.jsx";
import ServerDetails from "./ServerDetails.jsx";
import BlueprintSelection from "./BlueprintSelection.jsx";

const ServerSetupForm = () => {
  const [formData, setFormdata] = useState({
    serverName: "",
    tag: "",
    serverType: "Go Live",
    blueprint: "Blue Print One",
  });
  const [isBlueprintsChecked, setIsBlueprintsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsBlueprintsChecked(!isBlueprintsChecked);
  };

  const handleChange = (event) => {
    setFormdata({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  console.log(formData);

  return (
    <form className="pt-12 space-y-8">
      <ServerDetails
        serverName={formData.serverName}
        tag={formData.tag}
        handleChange={handleChange}
      />

      {/* server types */}
      <ServerTypes
        serverType={formData.serverType}
        handleChange={handleChange}
      />

      {/* blueprint selection */}
      <BlueprintSelection
        isBlueprintsChecked={isBlueprintsChecked}
        handleCheckboxChange={handleCheckboxChange}
        blueprint={formData.blueprint}
        handleChange={handleChange}
      />
    </form>
  );
};

export default ServerSetupForm;
