const Footer = () => {
  return (
    <div className="flex items-center justify-between text-[#919DB9] text-sm py-4 leading-tight gap-4 border-t border-[#1D2239] mt-[76px]">
      <div>
        <p>
          Copyright &#xA9; 2024 |{" "}
          <span className="text-white">xCloud Hosting LLC</span>. All rights
          reserved.
        </p>
      </div>
      <div>
        <p className="text-right">
          xCloud{" "}
          <a className="text-white" href="https://xcloud.host/changelog">
            v1.2.2
          </a>
        </p>
      </div>
    </div>
  );
};
export default Footer;
