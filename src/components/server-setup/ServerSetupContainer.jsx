import ServerSetupForm from "./ServerSetupForm";
import xCloudLogoBlue from "/xCloudLogoBlue.png";

const ServerSetupContainer = () => {
  return (
    <div className="bg-[#1D2239] p-4 md:p-10 lg:p-20 rounded-[10px]">
      <div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-4 pb-4">
          <h1 className="text-2xl md:text-[2.5rem] leading-[1] tracking-wide text-white">
            Set Up Your Server With
          </h1>
          <div>
            <img className="h-8 md:h-full" src={xCloudLogoBlue} alt="logo" />
          </div>
        </div>
        <p className="text-center text-[#919DB9]">
          Fill in the details below to get your server set up with xCloud
        </p>
      </div>

      {/* server setup form */}
      <ServerSetupForm />
    </div>
  );
};

export default ServerSetupContainer;
