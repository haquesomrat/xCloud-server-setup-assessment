import Container from "../components/global/Container";
import Footer from "../components/global/Footer";
import ServerSetupContainer from "../components/server-setup/ServerSetupContainer";

const Home = () => {
  return (
    <Container>
      <div className="pt-20 pb-5 md:pb-[58px] min-h-screen ">
        <ServerSetupContainer />
        <Footer />
      </div>
    </Container>
  );
};

export default Home;
