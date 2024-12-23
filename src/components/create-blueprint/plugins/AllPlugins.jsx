import { useState } from "react";
import { allPlugins } from "../../../fake-data/allPlugins";
import Plugin from "./Plugin";

const AllPlugins = () => {
  const [plugins, setPlugins] = useState(allPlugins.slice(0, 12));

  const handlePluginSelection = (id) => {
    setPlugins((prevPlugins) => {
      return prevPlugins.map((plugin) => {
        if (plugin.id === id) {
          return { ...plugin, selected: !plugin.selected };
        }
        return plugin;
      });
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[510px] overflow-auto scrollbar-hide mt-6 pb-[60px]">
      {plugins.map((plugin) => (
        <Plugin
          key={plugin.id}
          plugin={plugin}
          handlePluginSelection={handlePluginSelection}
        />
      ))}
    </div>
  );
};

export default AllPlugins;
