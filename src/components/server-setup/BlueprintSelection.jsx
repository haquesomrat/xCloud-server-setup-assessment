import { Link } from "react-router-dom";
import CreateBlueprintModal from "../create-blueprint/CreateBlueprintModal";
import BlueprintOptions from "./BlueprintOptions";
import BlueprintCheckbox from "./BlueprintCheckbox";
import { allBlueprints } from "../../fake-data/allBlueprints";

const BlueprintSelection = ({
  isBlueprintsChecked,
  handleCheckboxChange,
  blueprint,
  handleChange,
}) => {
  return (
    <div className="p-5 bg-[#171A30] rounded-[5px]">
      {/* Blueprint checkbox */}
      <BlueprintCheckbox
        isBlueprintsChecked={isBlueprintsChecked}
        handleCheckboxChange={handleCheckboxChange}
      />

      {/* Blueprint options */}
      {isBlueprintsChecked && (
        <BlueprintOptions
          blueprint={blueprint}
          handleChange={handleChange}
          allBlueprints={allBlueprints.slice(0, 3)}
        />
      )}

      {/* View all button and create blueprint button with modal */}
      {isBlueprintsChecked && (
        <div className="flex flex-wrap gap-3 sm:gap-5 items-center justify-center md:justify-end pt-4">
          <div>
            <Link to="/blueprints">
              <button className="flex items-center p-3 gap-1 group">
                <span className="text-sm text-[#147AFF]">View All</span>
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
          </div>
          <div>
            <CreateBlueprintModal />
          </div>
        </div>
      )}
    </div>
  );
};

export default BlueprintSelection;
