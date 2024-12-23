import { Link } from "react-router-dom";
import { allBlueprints } from "../fake-data/allBlueprints";
import { useForm } from "../Context/FormProvider";
import Container from "../components/global/Container";
import CreateBlueprintModal from "../components/global/create-blueprint-modal/CreateBlueprintModal";
import BlueprintOptions from "../components/server-setup/blueprints/BlueprintOptions";

const Blueprints = () => {
  const { formData, setFormData } = useForm();

  // handle form change
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Container>
      <div className="pt-20 pb-[58px] min-h-[calc(100vh-100px)]">
        <div className="bg-xc-foreground p-4 md:p-8 rounded-lg">
          <div className="xc-middle flex-wrap sm:justify-between pb-4 md:pb-8">
            <h1 className="text-white text-2xl md:text-3xl">All Blueprint</h1>

            {/* start::Create Blueprint Modal */}
            <CreateBlueprintModal />
            {/* end::Create Blueprint Modal */}
          </div>

          {/* start::Blueprint Options */}
          <BlueprintOptions
            blueprint={formData.blueprint}
            allBlueprints={allBlueprints}
            handleChange={handleChange}
          />
          {/* end::Blueprint Options */}

          {/* start::OK Button */}
          <div className="pt-12 flex items-center justify-end">
            <Link to={"/"}>
              <button className="flex items-center p-3 gap-1 group bg-[#2DC774] px-6 py-3 rounded-lg">
                <span className="text-base text-white font-semibold leading-tight">
                  Ok
                </span>
              </button>
            </Link>
          </div>
          {/* end::OK Button */}
        </div>
      </div>
    </Container>
  );
};

export default Blueprints;
