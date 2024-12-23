const BlueprintCheckbox = ({ isBlueprintsChecked, handleCheckboxChange }) => {
  return (
    <div className={`${isBlueprintsChecked && "pb-3"}`}>
      <div className="flex justify-between gap-4">
        {/* start::Section Title */}
        <h6 className="text-2xl text-white leading-tight pb-3">Blueprints</h6>
        {/* end::Section Title */}

        {/* start::Blueprint Toggler */}
        <div>
          <label className="flex cursor-pointer select-none items-center">
            <div className="relative">
              <input
                type="checkbox"
                checked={isBlueprintsChecked}
                onChange={handleCheckboxChange}
                className="sr-only"
              />
              <div
                className={`box xc-toggle-container ${
                  isBlueprintsChecked ? "bg-[#32BA7C]" : "bg-[#EEF2F7]"
                }`}
              ></div>
              <div
                className={`xc-toggle-button ${
                  isBlueprintsChecked
                    ? "translate-x-full bg-white"
                    : "bg-[#9DA2AE]"
                }`}
              ></div>
            </div>
          </label>
        </div>
        {/* end::Blueprint Toggler */}
      </div>

      {/* start::Blueprint Description */}
      <p className="text-sm text-xc-text leading-relaxed">
        Add the following record to the DNS for your domain to get free
      </p>
      {/* end::Blueprint Description */}
    </div>
  );
};

export default BlueprintCheckbox;
