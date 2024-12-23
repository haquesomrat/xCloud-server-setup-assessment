import { allServerTypes } from "../../fake-data/allServerTypes";

const ServerTypes = ({ serverType, handleChange }) => {
  return (
    <div>
      {/* start::Section Title */}
      <h4 className="xc-section-title">Server Type</h4>
      {/* end::Section Title */}

      {/* start::Server Types Content */}
      <div className="grid gap-4 lg:gap-[30px] grid-cols-1 md:grid-cols-2">
        {allServerTypes.map((serverItem) => (
          <div key={serverItem.id}>
            <input
              className="hidden"
              type="radio"
              name="serverType"
              id={serverItem.type}
              value={serverItem.type}
              checked={serverType === serverItem.type}
              onChange={handleChange}
            />
            <label htmlFor={serverItem.type}>
              <div
                className={`xc-server-item ${
                  serverType === serverItem.type
                    ? "border-xc-blue"
                    : "border-xc-borderColor"
                }`}
              >
                <div className="w-12 h-12">
                  <img
                    className="w-full"
                    src={serverItem.icon}
                    alt="go live icon"
                  />
                </div>
                <div className="flex-1">
                  <h6 className="text-white font-medium text-xl pb-2 leading-[18px] ">
                    {serverItem.type}
                  </h6>
                  <p className="text-xc-text leading-snug text-sm">
                    {serverItem.info}
                  </p>
                </div>
              </div>
            </label>
          </div>
        ))}
      </div>
      {/* end::Server Types Content */}
    </div>
  );
};

export default ServerTypes;
