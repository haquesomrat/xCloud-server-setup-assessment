import { Link } from "react-router-dom";
import BlueprintCheckbox from "./BlueprintCheckbox";
import { allBlueprints } from "../../../fake-data/allBlueprints";
import BlueprintOptions from "./BlueprintOptions";
import CreateBlueprintModal from "../../global/create-blueprint-modal/CreateBlueprintModal";

const BlueprintSelection = ({
  isBlueprintsChecked,
  handleCheckboxChange,
  blueprint,
  handleChange,
}) => {
  return (
    <div className="p-4 md:p-6 bg-xc-background rounded-[5px]">
      {/* start::Blueprint Checkbox */}
      <BlueprintCheckbox
        isBlueprintsChecked={isBlueprintsChecked}
        handleCheckboxChange={handleCheckboxChange}
      />
      {/* end::Blueprint Checkbox */}

      {/* start::Blueprint Options */}
      {isBlueprintsChecked && (
        <BlueprintOptions
          blueprint={blueprint}
          handleChange={handleChange}
          allBlueprints={allBlueprints.slice(0, 3)}
        />
      )}
      {/* end::Blueprint Options */}

      {/* start::Blueprint Button Container */}
      {isBlueprintsChecked && (
        <div className="xc-blueprint-btn-container">
          <div>
            {/* start::View All Button */}
            <Link to="/blueprints">
              <button className="flex items-center p-3 gap-1 group">
                <span className="text-sm text-xc-blue">View All</span>
                <svg
                  className="group-hover:translate-x-1 duration-200"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_411_5623)">
                    <path
                      d="M3.33594 8H12.6693"
                      stroke="#147AFF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.66406 12L12.6641 8"
                      stroke="#147AFF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.66406 4L12.6641 8"
                      stroke="#147AFF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_411_5623">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </Link>
            {/* end::View All Button */}
          </div>
          <div>
            {/* start::Create Blueprint Modal */}
            <CreateBlueprintModal />
            {/* end::Create Blueprint Modal */}
          </div>
        </div>
      )}
      {/* end::Blueprint Button Container */}
    </div>
  );
};

export default BlueprintSelection;
