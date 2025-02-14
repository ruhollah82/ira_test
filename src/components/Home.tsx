import AwardsSection from "./AwardsSection";
import BlogSection from "./BlogSection";
import ClientsSection from "./ClientsSection";
import ContactSection from "./ContactUsSection";
import FeaturedProjects from "./FeaturedProjects";
import Header from "./Header";
import Services from "./Services";
import ServicesAccordion from "./ServicesAccordion";
import TestimonialsSection from "./TestimonialsSection";

const Home = () => {
  return (
    <>
      <Header />
      <Services />
      <FeaturedProjects />
      <ServicesAccordion />
      <ClientsSection />
      <TestimonialsSection />
      <AwardsSection />
      <BlogSection />
      <ContactSection />
    </>
  );
};

export default Home;
