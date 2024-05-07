import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

import { GrFacebookOption } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

import { Link } from "react-router-dom";
import team1 from "../../../assets/images/team/1.jpg";
import team2 from "../../../assets/images/team/2.jpg";
import team3 from "../../../assets/images/team/3.jpg";
import team4 from "../../../assets/images/banner/2.jpg";
import team5 from "../../../assets/images/banner/1.jpg";

import "./TeamSection.css";

const TeamSection = () => {
  return (
    <div className="my-10">
      <div className="max-w-3xl text-center mx-auto space-y-4 mb-10">
        <h2 className="text-[#FF3811] text-2xl font-medium">Team</h2>
        <h2 className="text-5xl font-bold ">Meet Our Team</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which do not look even slightly
          believable.
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          cssMode={true}
          navigation={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="border-2 p-5 rounded-lg">
              <img className="rounded-lg" src={team1} alt="" />

              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-600">
                  Car Engine Plug
                </h2>
                <h4 className="text-lg font-medium text-gray-400">
                  Engine Expert
                </h4>
                <div className="social_area flex gap-3 my-5 justify-center">
                  <Link className="bg-[#395185] p-2 rounded-full text-white">
                    <GrFacebookOption />
                  </Link>
                  <Link className="bg-[#55ACEE] p-2 rounded-full text-white">
                    <FaTwitter />
                  </Link>
                  <Link className="bg-[#0A66C2] p-2 rounded-full text-white">
                    <FaLinkedinIn />
                  </Link>
                  <Link className="bg-[#EF6959] p-2 rounded-full text-white">
                    <FaInstagramSquare />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border-2 p-5 rounded-lg">
              <img className="rounded-lg" src={team2} alt="" />

              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-600">
                  Car Engine Plug
                </h2>
                <h4 className="text-lg font-medium text-gray-400">
                  Engine Expert
                </h4>
                <div className="social_area flex gap-3 my-5 justify-center">
                  <Link className="bg-[#395185] p-2 rounded-full text-white">
                    <GrFacebookOption />
                  </Link>
                  <Link className="bg-[#55ACEE] p-2 rounded-full text-white">
                    <FaTwitter />
                  </Link>
                  <Link className="bg-[#0A66C2] p-2 rounded-full text-white">
                    <FaLinkedinIn />
                  </Link>
                  <Link className="bg-[#EF6959] p-2 rounded-full text-white">
                    <FaInstagramSquare />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border-2 p-5 rounded-lg">
              <img className="rounded-lg" src={team3} alt="" />

              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-600">
                  Car Engine Plug
                </h2>
                <h4 className="text-lg font-medium text-gray-400">
                  Engine Expert
                </h4>
                <div className="social_area flex gap-3 my-5 justify-center">
                  <Link className="bg-[#395185] p-2 rounded-full text-white">
                    <GrFacebookOption />
                  </Link>
                  <Link className="bg-[#55ACEE] p-2 rounded-full text-white">
                    <FaTwitter />
                  </Link>
                  <Link className="bg-[#0A66C2] p-2 rounded-full text-white">
                    <FaLinkedinIn />
                  </Link>
                  <Link className="bg-[#EF6959] p-2 rounded-full text-white">
                    <FaInstagramSquare />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border-2 p-5 rounded-lg">
              <img className="rounded-lg" src={team4} alt="" />

              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-600">
                  Car Engine Plug
                </h2>
                <h4 className="text-lg font-medium text-gray-400">
                  Engine Expert
                </h4>
                <div className="social_area flex gap-3 my-5 justify-center">
                  <Link className="bg-[#395185] p-2 rounded-full text-white">
                    <GrFacebookOption />
                  </Link>
                  <Link className="bg-[#55ACEE] p-2 rounded-full text-white">
                    <FaTwitter />
                  </Link>
                  <Link className="bg-[#0A66C2] p-2 rounded-full text-white">
                    <FaLinkedinIn />
                  </Link>
                  <Link className="bg-[#EF6959] p-2 rounded-full text-white">
                    <FaInstagramSquare />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border-2 p-5 rounded-lg">
              <img className="rounded-lg" src={team5} alt="" />

              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-600">
                  Car Engine Plug
                </h2>
                <h4 className="text-lg font-medium text-gray-400">
                  Engine Expert
                </h4>
                <div className="social_area flex gap-3 my-5 justify-center">
                  <Link className="bg-[#395185] p-2 rounded-full text-white">
                    <GrFacebookOption />
                  </Link>
                  <Link className="bg-[#55ACEE] p-2 rounded-full text-white">
                    <FaTwitter />
                  </Link>
                  <Link className="bg-[#0A66C2] p-2 rounded-full text-white">
                    <FaLinkedinIn />
                  </Link>
                  <Link className="bg-[#EF6959] p-2 rounded-full text-white">
                    <FaInstagramSquare />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border-2 p-5 rounded-lg">
              <img
                className="rounded-lg"
                src="http://localhost:3000/src/assets/images/about_us/person.jpg"
                alt=""
              />

              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-600">
                  Car Engine Plug
                </h2>
                <h4 className="text-lg font-medium text-gray-400">
                  Engine Expert
                </h4>
                <div className="social_area flex gap-3 my-5 justify-center">
                  <Link className="bg-[#395185] p-2 rounded-full text-white">
                    <GrFacebookOption />
                  </Link>
                  <Link className="bg-[#55ACEE] p-2 rounded-full text-white">
                    <FaTwitter />
                  </Link>
                  <Link className="bg-[#0A66C2] p-2 rounded-full text-white">
                    <FaLinkedinIn />
                  </Link>
                  <Link className="bg-[#EF6959] p-2 rounded-full text-white">
                    <FaInstagramSquare />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default TeamSection;
