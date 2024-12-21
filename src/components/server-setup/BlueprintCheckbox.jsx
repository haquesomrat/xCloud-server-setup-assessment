const BlueprintCheckbox = ({ isBlueprintsChecked, handleCheckboxChange }) => {
  return (
    <div className={`${isBlueprintsChecked && "pb-3"}`}>
      <div className="flex justify-between gap-4">
        <h6 className="text-2xl text-white leading-tight pb-3">Blueprints</h6>
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
                className={`box block h-6 w-[42px] rounded-full ${
                  isBlueprintsChecked ? "bg-[#32BA7C]" : "bg-[#EEF2F7]"
                }`}
              ></div>
              <div
                className={`absolute left-1 top-1 flex h-4 w-4 items-center justify-center rounded-full  transition ${
                  isBlueprintsChecked
                    ? "translate-x-full bg-white"
                    : "bg-[#9DA2AE]"
                }`}
              ></div>
            </div>
          </label>
        </div>
      </div>
      <p className="text-sm text-[#919DB9] leading-relaxed">
        Add the following record to the DNS for your domain to get free
      </p>
    </div>
  );
};

export default BlueprintCheckbox;
