import { useState } from "react";
import ServerTypes from "./ServerTypes.jsx";
import ServerDetails from "./ServerDetails.jsx";
import { useForm } from "../../Context/FormProvider.jsx";
import BlueprintSelection from "./blueprints/BlueprintSelection.jsx";

const ServerSetupForm = () => {
  const { formData, setFormData } = useForm();
  const [isBlueprintsChecked, setIsBlueprintsChecked] = useState(false);

  // handle form change
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  // handle checkbox
  const handleCheckboxChange = () => {
    setIsBlueprintsChecked(!isBlueprintsChecked);
  };

  // console.log(formData);

  return (
    <form className="pt-12 space-y-8">
      {/* start:: Server Details */}
      <ServerDetails
        serverName={formData.serverName}
        tag={formData.tag}
        handleChange={handleChange}
      />
      {/* end:: Server Details */}

      {/* start:: Server Types */}
      <ServerTypes
        serverType={formData.serverType}
        handleChange={handleChange}
      />
      {/* end:: Server Types */}

      {/* start:: Blueprint Selection */}
      <BlueprintSelection
        isBlueprintsChecked={isBlueprintsChecked}
        handleCheckboxChange={handleCheckboxChange}
        blueprint={formData.blueprint}
        handleChange={handleChange}
      />
      {/* end:: Blueprint Selection */}
    </form>
  );
};

export default ServerSetupForm;
