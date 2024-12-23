import AllPlugins from "./AllPlugins";
import SelectedPlugins from "./SelectedPlugins";

const Plugins = () => {
  return (
    <div className="pb-0">
      {/* start::Selected Plugins */}
      <SelectedPlugins />
      {/* end::Selected Plugins */}

      {/* strat::All Plugins */}
      <div>
        <AllPlugins />
      </div>
      {/* end::All Plugins */}
    </div>
  );
};

export default Plugins;
