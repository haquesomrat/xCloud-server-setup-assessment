import { useState } from "react";
import { allPlugins } from "../../../fake-data/allPlugins";
import PluginCard from "./PluginCard";

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
    <div className="xc-plugin-container">
      {plugins.map((plugin) => (
        <PluginCard
          key={plugin.id}
          plugin={plugin}
          handlePluginSelection={handlePluginSelection}
        />
      ))}
    </div>
  );
};

export default AllPlugins;
