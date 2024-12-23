import pluginImg from "/icons/plugin-icon.png";

const PluginCard = ({ plugin, handlePluginSelection }) => {
  const { selected, id } = plugin;

  return (
    <div
      onClick={() => handlePluginSelection(id)}
      className={`xc-plugin-card ${
        selected ? "border-xc-blue" : "border-transparent"
      }`}
    >
      {/* start:: Plugin Card Details */}
      <div className="flex justify-between gap-4 p-4 pb-6">
        {/* start:: Plugin Image */}
        <div>
          <div className=" h-12 w-12 rounded-lg bg-xc-foreground xc-middle">
            <img src={pluginImg} alt="plugin image" />
          </div>
        </div>
        {/* end:: Plugin Image */}

        {/* start::Plugin Text Content */}
        <div>
          <h6 className="text-base text-white font-medium pb-2 leading-none">
            Plugin name
          </h6>
          <p className="text-xs text-xc-cardText pb-4">
            Have an existing website already? Select this option to Have
          </p>

          <p className="text-xs text-xc-cardText font-medium italic">
            By: <span className="text-white">WPDeveloper</span>
          </p>
        </div>
        {/* end::Plugin Text Content */}

        {/* start:: Plugin Card Selection/Deselection */}
        <div>
          {selected ? (
            <div className="absolute top-2.5 right-2.5">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_411_5567)">
                  <path
                    d="M2.5 10C2.5 10.9849 2.69399 11.9602 3.0709 12.8701C3.44781 13.7801 4.00026 14.6069 4.6967 15.3033C5.39314 15.9997 6.21993 16.5522 7.12987 16.9291C8.03982 17.306 9.01509 17.5 10 17.5C10.9849 17.5 11.9602 17.306 12.8701 16.9291C13.7801 16.5522 14.6069 15.9997 15.3033 15.3033C15.9997 14.6069 16.5522 13.7801 16.9291 12.8701C17.306 11.9602 17.5 10.9849 17.5 10C17.5 9.01509 17.306 8.03982 16.9291 7.12987C16.5522 6.21993 15.9997 5.39314 15.3033 4.6967C14.6069 4.00026 13.7801 3.44781 12.8701 3.0709C11.9602 2.69399 10.9849 2.5 10 2.5C9.01509 2.5 8.03982 2.69399 7.12987 3.0709C6.21993 3.44781 5.39314 4.00026 4.6967 4.6967C4.00026 5.39314 3.44781 6.21993 3.0709 7.12987C2.69399 8.03982 2.5 9.01509 2.5 10Z"
                    stroke="#147AFF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.5 10.0026L9.16667 11.6693L12.5 8.33594"
                    stroke="#147AFF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_411_5567">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          ) : (
            <span className="h-4 w-4 xc-middle border border-xc-borderColor absolute top-2 right-2 z-20 rounded-full m-1"></span>
          )}
        </div>
        {/* end:: Plugin Card Selection/Deselection */}
      </div>
      {/* end:: Plugin Card Details */}

      {/* start:: Plugin Card Footer */}
      <div className="py-3 px-4">
        {/* start::Plugin Rating */}
        <div className="flex items-center gap-1 pb-2">
          <div className="flex gap-[2px]">
            {Array(4)
              .fill(0)
              .map((_, index) => (
                <svg
                  key={index}
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_2643_104)">
                    <path
                      d="M4.80718 4.28309L1.08551 4.82267L1.0196 4.83609C0.919813 4.86258 0.828845 4.91507 0.755985 4.98822C0.683125 5.06137 0.630984 5.15254 0.604884 5.25243C0.578785 5.35231 0.579664 5.45734 0.607431 5.55678C0.635198 5.65622 0.688858 5.7465 0.762931 5.81842L3.4591 8.44284L2.82326 12.1499L2.81568 12.2141C2.80957 12.3173 2.831 12.4203 2.87778 12.5125C2.92455 12.6047 2.99499 12.6828 3.08188 12.7388C3.16877 12.7948 3.26898 12.8268 3.37227 12.8313C3.47555 12.8359 3.57819 12.8129 3.66968 12.7648L6.99818 11.0148L10.3191 12.7648L10.3774 12.7916C10.4737 12.8295 10.5784 12.8411 10.6806 12.8253C10.7829 12.8094 10.8791 12.7666 10.9594 12.7013C11.0396 12.636 11.1011 12.5505 11.1374 12.4536C11.1737 12.3567 11.1836 12.2519 11.1661 12.1499L10.5297 8.44284L13.227 5.81784L13.2725 5.76825C13.3375 5.6882 13.3801 5.59235 13.396 5.49047C13.4119 5.38858 13.4005 5.28431 13.363 5.18826C13.3255 5.09222 13.2631 5.00784 13.1824 4.94372C13.1016 4.8796 13.0053 4.83803 12.9033 4.82325L9.1816 4.28309L7.51793 0.91142C7.46979 0.813731 7.39527 0.73147 7.30279 0.673947C7.21032 0.616424 7.10359 0.585938 6.99468 0.585938C6.88578 0.585938 6.77905 0.616424 6.68657 0.673947C6.5941 0.73147 6.51957 0.813731 6.47143 0.91142L4.80718 4.28309Z"
                      fill="#FF9446"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2643_104">
                      <rect width="14" height="14" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              ))}
            <svg
              width="14"
              height="13"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.99885 0.582235C7.09393 0.582597 7.18747 0.60636 7.27119 0.651429C7.35492 0.696497 7.42627 0.761483 7.47893 0.840652L7.51802 0.908319L9.18168 4.28057L12.9033 4.82015C13.3356 4.88315 13.5333 5.36849 13.3134 5.71032L13.2726 5.76574L13.2271 5.8159L10.5298 8.44032L11.1656 12.1474C11.1822 12.2441 11.1741 12.3434 11.1421 12.4362C11.1102 12.5289 11.0554 12.6121 10.9828 12.6781C10.9102 12.7441 10.8221 12.7907 10.7267 12.8137C10.6313 12.8366 10.5317 12.8352 10.437 12.8095L10.3781 12.7891L10.3192 12.7622L6.99826 11.0122L3.66976 12.7622C3.60852 12.7943 3.5461 12.8147 3.4831 12.8241L3.42126 12.8299C3.33985 12.8329 3.25871 12.8188 3.18304 12.7886C3.10738 12.7584 3.03885 12.7128 2.98185 12.6546C2.92485 12.5964 2.88063 12.5269 2.85203 12.4506C2.82343 12.3743 2.81108 12.2929 2.81576 12.2116L2.82335 12.1474L3.45918 8.44032L0.762432 5.81532C0.692696 5.74739 0.641049 5.66311 0.612188 5.57014C0.583328 5.47717 0.57817 5.37846 0.597183 5.28298C0.616197 5.18751 0.658779 5.0983 0.721056 5.02348C0.783332 4.94866 0.863328 4.89059 0.953765 4.85457L1.01968 4.83357L1.08618 4.82015L4.80726 4.28057L6.47151 0.908902C6.51793 0.808925 6.5926 0.72472 6.68631 0.666672C6.78001 0.608624 6.88866 0.579272 6.99885 0.582235ZM6.99885 2.49207V9.76974C7.04583 9.76974 7.09264 9.77542 7.13827 9.78665L7.20535 9.80765L7.27068 9.83682L9.81577 11.1779L9.3281 8.33532C9.30406 8.19484 9.33228 8.05042 9.40743 7.92932L9.44826 7.87157L9.4961 7.81907L11.5646 5.80482L8.71151 5.39182C8.5705 5.37135 8.44185 5.29997 8.34985 5.19115L8.30726 5.13457L8.27226 5.07274L6.99885 2.49207Z"
                fill="#FF9446"
              />
            </svg>
          </div>
          <span className="text-xs text-xc-cardText leading-none">(12,23)</span>
        </div>
        {/* end::Plugin Rating */}

        <p className="text-xs text-xc-cardText leading-none">
          5M+ Active Installations
        </p>
      </div>
      {/* end::Plugin Card Content */}
    </div>
  );
};

export default PluginCard;
