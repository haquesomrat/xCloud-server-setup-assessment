import ServerSetupForm from "./ServerSetupForm";
import xCloudLogoBlue from "/xCloudLogoBlue.png";

const ServerSetupContainer = () => {
  return (
    <div className="bg-xc-foreground p-4 md:p-10 lg:p-20 rounded-[10px]">
      {/* start:: Server Setup Card Heading */}
      <div>
        <div className="xc-middle flex-col sm:flex-row gap-2 md:gap-4 pb-4">
          <h1 className="text-2xl md:text-[2.5rem] leading-[1] tracking-wide text-white">
            Set Up Your Server With
          </h1>
          <div>
            <img className="h-8 md:h-full" src={xCloudLogoBlue} alt="logo" />
          </div>
        </div>
        <p className="text-center text-xc-text">
          Fill in the details below to get your server set up with xCloud
        </p>
      </div>
      {/* end:: Server Setup Card Heading */}

      {/* start:: Server Setup Form */}
      <ServerSetupForm />
      {/* end:: Server Setup Form */}

      {/* start:: More Advanced Settings */}
      <div className="pt-4 md:pt-8">
        <button className="text-white text-sm leading-tight flex gap-3 pl-5 pr-2.5 py-2.5 bg-[#2A325C] rounded mx-auto md:mx-0">
          More Advanced Settings
          <span className="h-5 w-5 xc-middle">
            <svg
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.99865 4.97656L10.1236 0.851562L11.302 2.0299L5.99865 7.33323L0.695313 2.0299L1.87365 0.851562L5.99865 4.97656Z"
                fill="white"
              />
            </svg>
          </span>
        </button>
      </div>
      {/* end:: More Advanced Settings */}
    </div>
  );
};

export default ServerSetupContainer;
