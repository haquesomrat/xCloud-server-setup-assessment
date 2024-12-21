import AllPlugins from "./AllPlugins";
import SelectedPlugins from "./SelectedPlugins";

const Plugins = () => {
  return (
    <div className="pb-20">
      {/* selected plugins */}
      <SelectedPlugins />

      {/* all plugins */}
      <AllPlugins />
    </div>
  );
};

export default Plugins;
