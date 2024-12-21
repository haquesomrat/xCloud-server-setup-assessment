import { allPlugins } from "../../../fake-data/allPlugins";
import Plugin from "./Plugin";

const AllPlugins = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-hidden">
      {allPlugins.slice(0, 6).map((plugin) => (
        <>
          {/* <p key={plugin.id}>{plugin.fallbackIcon}</p> */}
          <Plugin plugin={plugin} />
        </>
      ))}
    </div>
  );
};

export default AllPlugins;
