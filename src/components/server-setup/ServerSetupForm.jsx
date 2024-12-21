import { useState } from "react";
import goLiveIcon from "/go-live.png";
import stagingEnvironmentIcon from "/staging-environment.png";
import { allBlueprints } from "../../fake-data/allBlueprints.js";
import { Link } from "react-router-dom";
import CreateBlueprintModal from "../create-blueprint/CreateBlueprintModal.jsx";

const ServerSetupForm = () => {
  const [serverType, setServerType] = useState("go-live");
  const [isBlueprintsChecked, setIsBlueprintsChecked] = useState(false);
  const [blueprint, setBlueprint] = useState("Blue Print One");

  const handleCheckboxChange = () => {
    setIsBlueprintsChecked(!isBlueprintsChecked);
  };

  const handleServerTypeChange = (e) => {
    setServerType(e.target.value);
  };

  const handleBlueprint = (e) => {
    setBlueprint(e.target.value);
  };

  return (
    <form className="pt-12 space-y-8">
      <div>
        <h4 className="text-lg font-medium text-white leading-tight pb-4">
          Server Details
        </h4>
        <div className="grid gap-4 lg:gap-[30px] grid-cols-1 md:grid-cols-2">
          <div className="grid col-span-1">
            <label
              htmlFor="server-name"
              className="text-[#74778E] text-sm leading-tight pb-2.5"
            >
              Server Name
            </label>
            <input
              className="px-4 py-3 md:px-6 md:py-5 bg-transparent rounded-[5px] border text-[#919DB9] text-sm leading-tight border-[#313A6C]  focus-visible:outline-0"
              type="text"
              name="server-name"
              placeholder="Example Site"
              required
            />
          </div>
          <div className="grid col-span-1 relative">
            <label
              htmlFor="add-tag"
              className="text-[#74778E] text-sm leading-tight pb-2.5"
            >
              Add Tag (Optional)
            </label>
            <div className="relative">
              <select
                className="w-full px-4 py-2.5 md:px-[25px] md:py-[21px] bg-transparent rounded-[5px] border text-[#919DB9] text-sm leading-tight border-[#313A6C] appearance-none focus-visible:outline-0"
                name="tags"
                id="tags"
                defaultValue={"Select or create tags"}
              >
                <option value="" disabled>
                  Select or create tags
                </option>
                <option value="tag-1">Tag 1</option>
                <option value="tag-2">Tag 2</option>
                <option value="tag-3">Tag 3</option>
                <option value="tag-4">Tag 4</option>
              </select>
              <span className="absolute top-1/2 right-4 transform -translate-y-1/2 pointer-events-none h-5 w-5 rounded flex items-center justify-center bg-[#313A6C]">
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.00048 3.78047L8.30048 0.480469L9.24315 1.42314L5.00048 5.6658L0.757812 1.42314L1.70048 0.480469L5.00048 3.78047Z"
                    fill="#C1C9DE"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-lg font-medium text-white leading-tight pb-4">
          Server Type
        </h4>
        <div className="grid gap-4 lg:gap-[30px] grid-cols-1 md:grid-cols-2">
          <div>
            <input
              className="hidden"
              type="radio"
              id="go-live"
              value="go-live"
              checked={serverType === "go-live"}
              onChange={handleServerTypeChange}
            />
            <label className="" htmlFor="go-live">
              <div
                className={`col-span-1 pt-4 pr-[19px] pb-6 pl-6 flex gap-5 h-full cursor-pointer items-center border rounded ${
                  serverType === "go-live"
                    ? "border-[#147AFF]"
                    : "border-[#313A6C]"
                }`}
              >
                <div className="w-12 h-12">
                  <img className="w-full" src={goLiveIcon} alt="go live icon" />
                </div>
                <div className="flex-1">
                  <h6 className="text-white font-medium text-xl pb-2 leading-[18px]">
                    Go Live
                  </h6>
                  <p className="text-[#919DB9] leading-snug text-sm">
                    Get your site up and running for the world to see by simply
                    pointing your domain to the server.
                  </p>
                </div>
              </div>
            </label>
          </div>
          <div>
            <input
              className="hidden"
              type="radio"
              id="staging-environment"
              value="staging-environment"
              checked={serverType === "staging-environment"}
              onChange={handleServerTypeChange}
            />
            <label className="container" htmlFor="staging-environment">
              <div
                className={`col-span-1 pt-4 pr-[19px] pb-6 pl-6 flex gap-5 h-full cursor-pointer items-center border  rounded ${
                  serverType === "staging-environment"
                    ? "border-[#147AFF]"
                    : "border-[#313A6C]"
                }`}
              >
                <div className="h-12 w-12">
                  <img
                    src={stagingEnvironmentIcon}
                    alt="staging environment icon"
                  />
                </div>
                <div className="flex-1">
                  <h6 className="text-white font-medium text-xl pb-2 leading-[18px]">
                    Staging Environment
                  </h6>
                  <p className="text-[#919DB9] leading-snug text-sm">
                    Create your site in a staging environment and refine it
                    until it&apos;s ready for launch.
                  </p>
                </div>
              </div>
            </label>
          </div>
        </div>
      </div>

      <div className="p-5 bg-[#171A30] rounded-[5px]">
        <div className={`${isBlueprintsChecked && "pb-3"}`}>
          <div className="flex justify-between gap-4">
            <h6 className="text-2xl text-white leading-tight pb-3">
              Blueprints
            </h6>
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

        {isBlueprintsChecked && (
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4`}
          >
            {allBlueprints.slice(0, 3).map((singleBlueprint, index) => (
              <div key={index} className="relative">
                <input
                  className="hidden"
                  type="radio"
                  id={singleBlueprint.name}
                  value={singleBlueprint.name}
                  checked={blueprint === singleBlueprint.name}
                  onChange={handleBlueprint}
                />
                <label className="" htmlFor={singleBlueprint.name}>
                  {blueprint === singleBlueprint.name ? (
                    <svg
                      className="absolute top-2 right-2"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_411_5567)">
                        <path
                          d="M2.5 10C2.5 10.9849 2.69399 11.9602 3.0709 12.8701C3.44781 13.7801 4.00026 14.6069 4.6967 15.3033C5.39314 15.9997 6.21993 16.5522 7.12987 16.9291C8.03982 17.306 9.01509 17.5 10 17.5C10.9849 17.5 11.9602 17.306 12.8701 16.9291C13.7801 16.5522 14.6069 15.9997 15.3033 15.3033C15.9997 14.6069 16.5522 13.7801 16.9291 12.8701C17.306 11.9602 17.5 10.9849 17.5 10C17.5 9.01509 17.306 8.03982 16.9291 7.12987C16.5522 6.21993 15.9997 5.39314 15.3033 4.6967C14.6069 4.00026 13.7801 3.44781 12.8701 3.0709C11.9602 2.69399 10.9849 2.5 10 2.5C9.01509 2.5 8.03982 2.69399 7.12987 3.0709C6.21993 3.44781 5.39314 4.00026 4.6967 4.6967C4.00026 5.39314 3.44781 6.21993 3.0709 7.12987C2.69399 8.03982 2.5 9.01509 2.5 10Z"
                          stroke="#147AFF"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7.5 10.0026L9.16667 11.6693L12.5 8.33594"
                          stroke="#147AFF"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_411_5567">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  ) : (
                    <span className="h-4 w-4 flex items-center justify-center border border-[#313A6C] absolute top-2 right-2 z-20 rounded-full m-1"></span>
                  )}

                  <div
                    className={`bg-[#1D2239] p-4 rounded-md border z-10 ${
                      blueprint === singleBlueprint.name
                        ? "border-[#147AFF]"
                        : "border-transparent"
                    }`}
                  >
                    <div className="pb-3">
                      <div className="inline-flex mr-[5px]">
                        <p className="text-white text-sm">
                          {singleBlueprint.name}
                        </p>
                      </div>
                      {singleBlueprint.default && (
                        <span className="text-xs text-white leading-normal px-1 rounded bg-[#313A6C]">
                          default
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-.5">
                      {singleBlueprint.tags.slice(0, 3).map((blueprintTag) => (
                        <div
                          key={blueprintTag.id}
                          style={{
                            color: blueprintTag.textColor,
                            backgroundColor: blueprintTag.bgColor,
                          }}
                          className={` text-sm py-[7px] px-[5px] border border-[#373E60] rounded h-6 w-6 inline-flex items-center justify-center`}
                        >
                          {blueprintTag.title.charAt(0)}
                        </div>
                      ))}
                      <div className="text-[#171A30] text-sm bg-[#80B7FF] py-[7px] px-[5px] border border-[#373E60] rounded h-6 w-6 inline-flex items-center justify-center">
                        4+
                      </div>
                    </div>
                  </div>
                </label>
              </div>
            ))}
          </div>
        )}

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
    </form>
  );
};

export default ServerSetupForm;
