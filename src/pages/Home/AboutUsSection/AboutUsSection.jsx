import aboutImg1 from "../../../assets/images/about_us/person.jpg";
import aboutImg2 from "../../../assets/images/about_us/parts.jpg";

const AboutUsSection = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10 bg-gray-100 my-16">
      <div className="flex-1 relative">
        <img className="w-5/6 h-5/6 object-cover" src={aboutImg1} alt="" />
        <img
          className="w-4/6 absolute bottom-1 right-0 border-8 border-white"
          src={aboutImg2}
          alt=""
        />
      </div>
      <div className="flex-1 space-y-4 p-5">
        <p className="text-2xl font-medium text-[#FF3811]">About Us</p>
        <h2 className="text-3xl md:text-5xl font-bold">
          We are qualified <br /> & of experience <br /> in this field
        </h2>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which do not look even slightly
          believable.{" "}
        </p>

        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which do not look even slightly
          believable.{" "}
        </p>
        <button className="btn bg-[#FF3811] text-white">Get More Info</button>
      </div>
    </div>
  );
};

export default AboutUsSection;
