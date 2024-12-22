import { useState } from "react";
import ServerTypes from "./ServerTypes.jsx";
import ServerDetails from "./ServerDetails.jsx";
import BlueprintSelection from "./BlueprintSelection.jsx";
import { useForm } from "../Context/FormProvider.jsx";

const ServerSetupForm = () => {
  const { formData, setFormData } = useForm();
  const [isBlueprintsChecked, setIsBlueprintsChecked] = useState(false);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleCheckboxChange = () => {
    setIsBlueprintsChecked(!isBlueprintsChecked);
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
