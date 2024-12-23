const Footer = () => {
  return (
    <div className="xc-footer">
      {/* start:: Copyright */}
      <div>
        <p>
          Copyright &#xA9; 2024 |{" "}
          <span className="text-white">xCloud Hosting LLC</span>. All rights
          reserved.
        </p>
      </div>
      {/* end:: Copyright */}

      {/* start:: Changelog */}
      <div>
        <p className="text-right">
          xCloud{" "}
          <a className="text-white" href="https://xcloud.host/changelog">
            v1.2.2
          </a>
        </p>
      </div>
      {/* end:: Changelog */}
    </div>
  );
};
export default Footer;
