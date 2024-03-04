import HeroSection from "./Components/HeroSection";
import { useProductContext } from "./context/productContext";

const About = () => {
  const { myName } = useProductContext();

  const data = {
    name: "vineet Ecommerce",
  };

  return (
    <>
      {myName}
      <HeroSection myData={data} />
    </>
  );
};

export default About;
