import AllPlugins from "./AllPlugins";
import SelectedPlugins from "./SelectedPlugins";

const Plugins = () => {
  return (
    <div className="pb-0">
      {/* selected plugins */}
      <SelectedPlugins />

      {/* all plugins */}
      <div className="">
        <AllPlugins />
      </div>
    </div>
  );
};

export default Plugins;
