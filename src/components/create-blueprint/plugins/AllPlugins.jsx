import { allPlugins } from "../../../fake-data/allPlugins";
import Plugin from "./Plugin";

const AllPlugins = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[400px] overflow-auto scrollbar-hide mt-6 pb-[60px]">
      {allPlugins.slice(0, 12).map((plugin) => (
        <>
          {/* <p key={plugin.id}>{plugin.fallbackIcon}</p> */}
          <Plugin plugin={plugin} />
        </>
      ))}
    </div>
  );
};

export default AllPlugins;
