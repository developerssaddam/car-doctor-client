import { FaStar } from "react-icons/fa6";
import product1 from "../../../assets/images/products/1.png";
import product2 from "../../../assets/images/products/2.png";
import product3 from "../../../assets/images/products/3.png";
import product4 from "../../../assets/images/products/4.png";
import product5 from "../../../assets/images/products/5.png";
import product6 from "../../../assets/images/products/6.png";

const PopularProductSection = () => {
  return (
    <div className="container mx-auto">
      <div className="max-w-3xl text-center mx-auto space-y-4 mb-10">
        <h2 className="text-[#FF3811] text-2xl font-medium">
          Popular Products
        </h2>
        <h2 className="text-3xl md:text-5xl font-bold ">Browse Our Products</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which do not look even slightly
          believable.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
        {/* cardItem-1 */}
        <div className="-2 p-5 rounded-md border-2">
          <div className="flex justify-center bg-gray-300 mb-3 rounded-lg">
            <img className="mb-3 w-2/3 h-[300px]" src={product6} alt="" />
          </div>

          <div className="text-center">
            <p className="flex gap-2 *:text-[#FF912C] justify-center">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </p>

            <h2 className="title font-bold text-2xl">Electrical system</h2>

            <p className="text-[#FF3811] font-medium">
              Price $<span>20.00</span>
            </p>
          </div>
        </div>

        {/* cardItem-2 */}
        <div className="-2 p-5 rounded-md border-2">
          <div className="flex justify-center bg-gray-300 mb-3 rounded-lg">
            <img className="mb-3 w-2/3 h-[300px]" src={product5} alt="" />
          </div>

          <div className="text-center">
            <p className="flex gap-2 *:text-[#FF912C] justify-center">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </p>

            <h2 className="title font-bold text-2xl">Electrical system</h2>

            <p className="text-[#FF3811] font-medium">
              Price $<span>20.00</span>
            </p>
          </div>
        </div>

        {/* cardItem-3 */}
        <div className="-2 p-5 rounded-md border-2">
          <div className="flex justify-center bg-gray-300 mb-3 rounded-lg">
            <img className="mb-3 w-2/3 h-[300px]" src={product4} alt="" />
          </div>

          <div className="text-center">
            <p className="flex gap-2 *:text-[#FF912C] justify-center">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </p>

            <h2 className="title font-bold text-2xl">Electrical system</h2>

            <p className="text-[#FF3811] font-medium">
              Price $<span>20.00</span>
            </p>
          </div>
        </div>

        {/* cardItem-4 */}
        <div className="-2 p-5 rounded-md border-2">
          <div className="flex justify-center bg-gray-300 mb-3 rounded-lg">
            <img className="mb-3 w-2/3 h-[300px]" src={product3} alt="" />
          </div>

          <div className="text-center">
            <p className="flex gap-2 *:text-[#FF912C] justify-center">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </p>

            <h2 className="title font-bold text-2xl">Electrical system</h2>

            <p className="text-[#FF3811] font-medium">
              Price $<span>20.00</span>
            </p>
          </div>
        </div>

        {/* cardItem-5 */}
        <div className="-2 p-5 rounded-md border-2">
          <div className="flex justify-center bg-gray-300 mb-3 rounded-lg">
            <img className="mb-3 w-2/3 h-[300px]" src={product2} alt="" />
          </div>

          <div className="text-center">
            <p className="flex gap-2 *:text-[#FF912C] justify-center">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </p>

            <h2 className="title font-bold text-2xl">Electrical system</h2>

            <p className="text-[#FF3811] font-medium">
              Price $<span>20.00</span>
            </p>
          </div>
        </div>

        {/* cardItem-6 */}
        <div className="-2 p-5 rounded-md border-2">
          <div className="flex justify-center bg-gray-300 mb-3 rounded-lg">
            <img className="mb-3 w-2/3 h-[300px]" src={product1} alt="" />
          </div>

          <div className="text-center">
            <p className="flex gap-2 *:text-[#FF912C] justify-center">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </p>

            <h2 className="title font-bold text-2xl">Electrical system</h2>

            <p className="text-[#FF3811] font-medium">
              Price $<span>20.00</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="btn bg-[#FF3811] text-white my-5">
          More Products
        </button>
      </div>
    </div>
  );
};

export default PopularProductSection;
