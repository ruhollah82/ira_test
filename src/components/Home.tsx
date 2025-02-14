import ClientsSection from "./ClientsSection";
import FeaturedProjects from "./FeaturedProjects";
import Header from "./Header";
import Services from "./Services";
import ServicesAccordion from "./ServicesAccordion";

const Home = () => {
  return (
    <>
      <Header />
      <Services />
      <FeaturedProjects />
      <ServicesAccordion />
      <ClientsSection />
    </>
  );
};

export default Home;
