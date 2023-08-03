import LoginButton from "../components/login";

const Footer = () => {
  return (
    <footer
      className="text-center text-lg-start  pt-4"
      style={{ background: "#047a83", position: "relative" }}
    >
      <div className="container-fluid p-4 foot">
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <LoginButton />
            </div>
          </div>
        </div>
      </div>

      <div className="text-center p-3 border-top border-white text-white">
        Link to our website:
        {/* <a className="text-white" href="https://auvr.vercel.app/">
          {" "}
          auvr.vercel.app
        </a> */}
      </div>
    </footer>
  );
};

export default Footer;
