const CreateBlueprintTabItems = ({ tabsData, activeTab, handleTabClick }) => {
  return (
    <div className="flex items-center overflow-x-auto">
      {tabsData.map((tab) => (
        <button
          type="button"
          key={tab.id}
          className={`p-3 sm:p-5 border-b-[2px] whitespace-nowrap ${
            activeTab === tab.id
              ? "border-white text-white"
              : "border-transparent text-[#A1A7BA]"
          }`}
          onClick={() => handleTabClick(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default CreateBlueprintTabItems;
