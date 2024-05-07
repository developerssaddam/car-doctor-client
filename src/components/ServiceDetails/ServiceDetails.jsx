import { Link, useLoaderData } from "react-router-dom";
import img1 from "../../assets/images/banner/4.jpg";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaFileAlt } from "react-icons/fa";
import logo from "../../assets/logo.svg";

const ServiceDetails = () => {
  const { _id, title, description, img, price } = useLoaderData();

  return (
    <div className="max-w-6xl mx-auto">
      <div className="relative w-full h-[250px] mb-20">
        <img
          src={img1}
          alt=""
          className="w-full h-full object-cover rounded-xl"
        />
        <h2 className="text-4xl font-bold text-white absolute top-1/2 left-10">
          Service Details
        </h2>
        <h2 className="bg-[#FF3811] text-sm py-2 text-white w-48 rounded-t-3xl text-center absolute bottom-0 left-1/4 md:left-1/2">
          Home/Service Details
        </h2>
      </div>

      <div className="flex flex-col md:flex-row md:gap-12">
        <div className="w-full md:w-2/3">
          <div className="space-y-4 mb-16">
            <img className="rounded-xl" src={img} alt="" />
            <div className="p-4">
              <h2 className="text-3xl font-bold">{title}</h2>
              <p>{description}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 p-2">
            {/* card-item */}
            <div className="bg-[#F3F3F3] p-8 border-t-4 border-[#FF3811] rounded-t-xl space-y-3">
              <h2 className="text-xl font-semibold text-gray-500">
                Instant Car Services
              </h2>
              <p>
                It uses a dictionary of over 200 Latin words, combined with a
                model sentence structures.
              </p>
            </div>
            {/* card-item */}
            <div className="bg-[#F3F3F3] p-8 border-t-4 border-[#FF3811] rounded-t-xl space-y-3">
              <h2 className="text-xl font-semibold text-gray-500">
                Instant Car Services
              </h2>
              <p>
                It uses a dictionary of over 200 Latin words, combined with a
                model sentence structures.
              </p>
            </div>
            {/* card-item */}
            <div className="bg-[#F3F3F3] p-8 border-t-4 border-[#FF3811] rounded-t-xl space-y-3">
              <h2 className="text-xl font-semibold text-gray-500">
                Instant Car Services
              </h2>
              <p>
                It uses a dictionary of over 200 Latin words, combined with a
                model sentence structures.
              </p>
            </div>
            {/* card-item */}
            <div className="bg-[#F3F3F3] p-8 border-t-4 border-[#FF3811] rounded-t-xl space-y-3">
              <h2 className="text-xl font-semibold text-gray-500">
                Instant Car Services
              </h2>
              <p>
                It uses a dictionary of over 200 Latin words, combined with a
                model sentence structures.
              </p>
            </div>
          </div>

          <p className="mb-12 p-4">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there is not anything embarrassing hidden in the
            middle of text.{" "}
          </p>

          <div className="space-y-3 p-4">
            <h2 className="text-xl font-bold">3 Simple Steps to Process</h2>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which do not look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there is not anything embarrassing
              hidden in the middle of text
            </p>
          </div>

          <div className="flex justify-around my-20 *:max-w-32 *:py-6">
            <div className="text-center border-t-4 rounded-t-xl">
              <div className="flex justify-center">
                <p className="bg-[#FF3811] w-10 h-10 rounded-full text-white font-bold flex items-center justify-center border-4 border-[#FFEBE7]">
                  01
                </p>
              </div>
              <h2 className="text-lg font-medium text-gray-400">Step One</h2>
              <h3 className="text-sm">It uses a dictionary of over 200 .</h3>
            </div>

            <div className="text-center border-t-4 rounded-t-xl">
              <div className="flex justify-center">
                <p className="bg-[#FF3811] w-10 h-10 rounded-full text-white font-bold flex items-center justify-center border-4 border-[#FFEBE7]">
                  02
                </p>
              </div>
              <h2 className="text-lg font-medium text-gray-400">Step Two</h2>
              <h3 className="text-sm">It uses a dictionary of over 200 .</h3>
            </div>

            <div className="text-center border-t-4 rounded-t-xl">
              <div className="flex justify-center">
                <p className="bg-[#FF3811] w-10 h-10 rounded-full text-white font-bold flex items-center justify-center border-4 border-[#FFEBE7]">
                  03
                </p>
              </div>
              <h2 className="text-lg font-medium text-gray-400">Step Three</h2>
              <h3 className="text-sm">It uses a dictionary of over 200 .</h3>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 p-2">
          <div className="bg-[#F3F3F3] p-5 rounded-xl mb-12 ">
            <h2 className="text-xl font-bold">Services</h2>
            <ul>
              <Link>
                <li className="flex items-center px-5 py-2 justify-between bg-white my-3">
                  <p>Full Car Repair</p>
                  <FaArrowRightLong className="text-[#FF3811]" />
                </li>
              </Link>
              <Link>
                <li className="flex items-center px-5 py-2 justify-between bg-white my-3">
                  <p>Full Car Repair</p>
                  <FaArrowRightLong className="text-[#FF3811]" />
                </li>
              </Link>
              <Link>
                <li className="flex items-center px-5 py-2 justify-between bg-white my-3">
                  <p>Full Car Repair</p>
                  <FaArrowRightLong className="text-[#FF3811]" />
                </li>
              </Link>
              <Link>
                <li className="flex items-center px-5 py-2 justify-between bg-white my-3">
                  <p>Full Car Repair</p>
                  <FaArrowRightLong className="text-[#FF3811]" />
                </li>
              </Link>
              <Link>
                <li className="flex items-center px-5 py-2 justify-between bg-white my-3">
                  <p>Full Car Repair</p>
                  <FaArrowRightLong className="text-[#FF3811]" />
                </li>
              </Link>
              <Link>
                <li className="flex items-center px-5 py-2 justify-between bg-white my-3">
                  <p>Full Car Repair</p>
                  <FaArrowRightLong className="text-[#FF3811]" />
                </li>
              </Link>
            </ul>
          </div>

          <div className="text-white bg-[#151515] p-8 rounded-xl mb-12">
            <h2 className="text-xl text-center font-bold mb-5">Download</h2>
            <div>
              <div>
                <div className="flex justify-between items-center mb-5">
                  <div className="flex gap-4 md:gap-2 lg:gap-4 items-center">
                    <FaFileAlt />
                    <div>
                      <h2 className="text-lg md:text-base lg:text-lg font-semibold">
                        Our Brochure
                      </h2>
                      <p className="text-sm font-medium text-gray-400">
                        Download
                      </p>
                    </div>
                  </div>
                  <Link className="">
                    <button className="bg-[#FF3811] md:px-2 px-4  lg:px-4 py-3 rounded-lg">
                      <FaArrowRightLong />
                    </button>
                  </Link>
                </div>

                <div className="flex justify-between items-center mb-5">
                  <div className="flex gap-4 md:gap-2 lg:gap-4 items-center">
                    <FaFileAlt />
                    <div>
                      <h2 className="text-lg md:text-base lg:text-lg font-semibold">
                        Company Details
                      </h2>
                      <p className="text-sm font-medium text-gray-400">
                        Download
                      </p>
                    </div>
                  </div>
                  <Link className="">
                    <button className="bg-[#FF3811] md:px-2 px-4  lg:px-4 py-3 rounded-lg">
                      <FaArrowRightLong />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="text-white bg-[#151515] p-8 pb-16 rounded-xl mb-12">
            <div className="flex justify-center">
              <img src={logo} alt="" />
            </div>
            <h2 className="text-center font-bold text-lg">
              Need Help? We Are Here
            </h2>
            <p className="font-semibold text-center mb-8">To Help You</p>
            <div className="bg-white rounded-xl text-center p-5 relative">
              <p className="text-gray-500 font-bold text-lg">
                <span className="text-[#FF3811]">Car Doctor</span> Special
              </p>
              <p className="text-gray-500 font-bold text-lg">
                Save up to{" "}
                <span className="text-[#FF3811] font-extrabold">60% off</span>
              </p>
              <p className="bg-[#FF3811] text-white px-8 bottom-[-30px] py-2 font-bold text-lg rounded-xl absolute left-1/4">
                Get A Quote
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold">
            Price $<span>{price}</span>{" "}
          </h2>
          <Link to={`/checkout/${_id}`}>
            <button className="bg-[#FF3811] text-white font-semibold text-lg rounded-xl py-2 px-4 w-full my-10">
              Proceed Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
