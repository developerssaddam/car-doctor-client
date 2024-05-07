import icon1 from "../../../assets/icons/icon1.png";
import icon2 from "../../../assets/icons/icon2.png";
import icon3 from "../../../assets/icons/icon3.png";

const ContactInfoSection = () => {
  return (
    <div className="bg-[#020202] text-white p-12 flex flex-col md:flex-row gap-10 max-w-3xl mx-auto my-10 rounded-lg">
      <div className="flex gap-4 items-center">
        <img src={icon1} alt="" />
        <div>
          <h3 className="text-xs">We are open monday-friday</h3>
          <p className="font-medium">7:00 am - 9:00 pm</p>
        </div>
      </div>

      <div className="flex gap-4 items-center">
        <img src={icon2} alt="" />
        <div>
          <h3 className="text-xs">Have a question?</h3>
          <p className="font-medium">+2546 251 2658</p>
        </div>
      </div>

      <div className="flex gap-4 items-center">
        <img src={icon3} alt="" />
        <div>
          <h3 className="text-xs">Need a repair? our address</h3>
          <p className="font-medium">Liza Street, New York</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoSection;
