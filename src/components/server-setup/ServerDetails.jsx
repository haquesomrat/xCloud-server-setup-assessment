import { allTags } from "../../fake-data/allTags";

const ServerDetails = ({ serverName, tag, handleChange }) => {
  return (
    <div>
      <div>
        {/* start::Section Title */}
        <h4 className="xc-section-title">Server Details</h4>
        {/* end::Section Title */}

        {/* start::Server Details Content */}
        <div className="grid gap-4 lg:gap-[30px] grid-cols-1 md:grid-cols-2">
          {/* start::Server Name Input */}
          <div className="grid col-span-1">
            <label htmlFor="server-name" className="xc-input-label">
              Server Name
            </label>
            <input
              className="px-4 py-3 md:px-6 md:py-5 bg-transparent rounded-[5px] border text-xc-text text-sm leading-tight border-xc-borderColor  focus-visible:outline-0"
              type="text"
              name="serverName"
              placeholder="Example Site"
              required
              value={serverName}
              onChange={handleChange}
            />
          </div>
          {/* end::Server Name Input */}

          {/* start::Add Tag Select */}
          <div className="grid col-span-1 relative">
            <label htmlFor="add-tag" className="xc-input-label">
              Add Tag (Optional)
            </label>

            <div className="relative">
              <select
                className="xc-select"
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

              {/* start::Custom Select Arrow */}
              <span className="absolute top-1/2 right-4 transform -translate-y-1/2 pointer-events-none xc-select-arrow">
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
              {/* end::Custom Select Arrow */}
            </div>
          </div>
          {/* end::Add Tag Select */}
        </div>
        {/* end::Server Details Content */}
      </div>
    </div>
  );
};

export default ServerDetails;
