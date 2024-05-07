import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ServicesCard = ({ service }) => {
  const { _id, img, title, price } = service;

  return (
    <div className="border-2 p-5 rounded-md">
      <img className="w-full h-[300px] object-cover" src={img} alt="" />

      <h2 className="title font-bold text-2xl mt-2">{title}</h2>

      <div className="text-[#FF3811] font-medium text-lg flex justify-between items-center my-2">
        <p className="">
          Price $<span>{price}</span>
        </p>
        <Link to={`/service/${_id}`}>
          <button>
            <FaArrowRightLong />
          </button>
        </Link>
      </div>
    </div>
  );
};

ServicesCard.propTypes = {
  service: PropTypes.object,
};
export default ServicesCard;
