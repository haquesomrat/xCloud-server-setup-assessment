import { Link } from "react-router-dom";
import Container from "../components/Container";
import CreateBlueprintModal from "../components/create-blueprint/CreateBlueprintModal";
import BlueprintOptions from "../components/server-setup/BlueprintOptions";
import { allBlueprints } from "../fake-data/allBlueprints";

const Blueprints = () => {
  return (
    <Container>
      <div className="pt-20 pb-[58px] min-h-[calc(100vh-100px)]">
        <div className="bg-[#1D2239] p-4 md:p-8 rounded-lg">
          <div className="flex flex-wrap justify-center sm:justify-between items-center pb-4 md:pb-8">
            <h1 className="text-white text-2xl md:text-3xl">All Blueprint</h1>

            {/* create blueprint modal */}
            <CreateBlueprintModal />
          </div>

          {/* blueprint options */}
          <BlueprintOptions allBlueprints={allBlueprints} />

          <div className="pt-12 flex items-center justify-end">
            <Link to={"/"}>
              <button className="flex items-center p-3 gap-1 group bg-[#2DC774] px-6 py-3 rounded-lg">
                <span className="text-base text-white">Ok</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Blueprints;
