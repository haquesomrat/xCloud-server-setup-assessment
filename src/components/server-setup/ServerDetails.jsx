import { allTags } from "../../fake-data/allTags";

const ServerDetails = ({ serverName, tag, handleChange }) => {
  return (
    <div>
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
              name="serverName"
              placeholder="Example Site"
              required
              value={serverName}
              onChange={handleChange}
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
                className="w-full px-4 py-2.5 md:px-[25px] md:py-[21px] bg-transparent cursor-pointer rounded-[5px] border text-[#919DB9] text-sm leading-tight border-[#313A6C] appearance-none focus-visible:outline-0"
                name="tag"
                id="tags"
                value={tag}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Select or create tags
                </option>
                {allTags.map((tag) => (
                  <option key={tag.id} value={tag.tag}>
                    {tag.tag}
                  </option>
                ))}
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
    </div>
  );
};

export default ServerDetails;
