import slider1 from "../../assets/images/banner/5.jpg";
import slider2 from "../../assets/images/banner/2.jpg";
import slider3 from "../../assets/images/banner/3.jpg";
import slider4 from "../../assets/images/banner/4.jpg";

const Slider = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full max-h-[600px]">
        <img src={slider1} className="w-full h-full object-cover" />
        <div className="absolute flex gap-5 transform -translate-y-1/2  right-5 bottom-5 *:bg-[#FF3811] *:text-white">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
        <div className="text-white absolute top-3 md:top-1/4 left-5 md:left-28 space-y-16 md:space-y-3 max-w-[480px]">
          <h2 className="text-2xl md:text-5xl font-bold">
            Affordable <br /> Price For Car <br /> Servicing
          </h2>
          <p className="hidden md:block">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="*:btn-sm *:md:btn-md flex gap-4 *:text-white">
            <button className="btn bg-[#FF3811]">Discover More</button>
            <button className="btn btn-outline">Latest Project</button>
          </div>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full max-h-[600px]">
        <img src={slider2} className="w-full object-cover" />
        <div className="absolute flex gap-5 transform -translate-y-1/2  right-5 bottom-5 *:bg-[#FF3811] *:text-white">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
        <div className="text-white absolute top-3 md:top-1/4 left-5 md:left-28 space-y-16 md:space-y-3 max-w-[480px]">
          <h2 className="text-2xl md:text-5xl font-bold">
            Affordable <br /> Price For Car <br /> Servicing
          </h2>
          <p className="hidden md:block">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="*:btn-sm *:md:btn-md flex gap-4 *:text-white">
            <button className="btn bg-[#FF3811]">Discover More</button>
            <button className="btn btn-outline">Latest Project</button>
          </div>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full max-h-[600px]">
        <img src={slider3} className="w-full h-full object-cover" />
        <div className="absolute flex gap-5 transform -translate-y-1/2  right-5 bottom-5 *:bg-[#FF3811] *:text-white">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
        <div className="text-white absolute top-3 md:top-1/4 left-5 md:left-28 space-y-16 md:space-y-3 max-w-[480px]">
          <h2 className="text-2xl md:text-5xl font-bold">
            Affordable <br /> Price For Car <br /> Servicing
          </h2>
          <p className="hidden md:block">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="*:btn-sm *:md:btn-md flex gap-4 *:text-white">
            <button className="btn bg-[#FF3811]">Discover More</button>
            <button className="btn btn-outline">Latest Project</button>
          </div>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full max-h-[600px]">
        <img src={slider4} className="w-full h-full object-cover" />
        <div className="absolute flex gap-5 transform -translate-y-1/2  right-5 bottom-5 *:bg-[#FF3811] *:text-white">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
        <div className="text-white absolute top-3 md:top-1/4 left-5 md:left-28 space-y-16 md:space-y-3 max-w-[480px]">
          <h2 className="text-2xl md:text-5xl font-bold">
            Affordable <br /> Price For Car <br /> Servicing
          </h2>
          <p className="hidden md:block">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="*:btn-sm *:md:btn-md flex gap-4 *:text-white">
            <button className="btn bg-[#FF3811]">Discover More</button>
            <button className="btn btn-outline">Latest Project</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
