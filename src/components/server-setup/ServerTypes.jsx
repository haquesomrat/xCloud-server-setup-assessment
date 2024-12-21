import { allServerTypes } from "../../fake-data/allServerTypes";

const ServerTypes = ({ serverType, handleChange }) => {
  return (
    <div>
      <h4 className="text-lg font-medium text-white leading-tight pb-4">
        Server Type
      </h4>
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
            <label className="" htmlFor={serverItem.type}>
              <div
                className={`col-span-1 pt-4 pr-[19px] pb-6 pl-6 flex gap-5 h-full cursor-pointer items-center border rounded ${
                  serverType === serverItem.type
                    ? "border-[#147AFF]"
                    : "border-[#313A6C]"
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
                  <h6 className="text-white font-medium text-xl pb-2 leading-[18px]">
                    {serverItem.type}
                  </h6>
                  <p className="text-[#919DB9] leading-snug text-sm">
                    {serverItem.info}
                  </p>
                </div>
              </div>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServerTypes;
