import Slider from "../../components/Slider/Slider";
import AboutUsSection from "./AboutUsSection/AboutUsSection";
import ContactInfoSection from "./ContactInfoSection/ContactInfoSection";
import PopularProductSection from "./PopularProductSection/PopularProductSection";
import ServicesSection from "./ServicesSection/ServicesSection";
import TeamSection from "./TeamSection/TeamSection";

const Home = () => {
  return (
    <div>
      <Slider />
      <AboutUsSection />
      <ServicesSection />
      <ContactInfoSection />
      <PopularProductSection />
      <TeamSection />
    </div>
  );
};

export default Home;
