const TabFooter = ({ handleBlueprintNameSubmit }) => {
  return (
    <div className="bg-[#232A4E] py-3 md:py-4 px-8 md:px-14 rounded-b-lg absolute bottom-0 left-4 xl:left-0 right-4 xl:right-0 text-right z-50">
      <button
        onClick={handleBlueprintNameSubmit}
        type="button"
        className="bg-[#147AFF] py-3 px-8 rounded-lg text-base text-white"
      >
        Next
      </button>
    </div>
  );
};

export default TabFooter;
