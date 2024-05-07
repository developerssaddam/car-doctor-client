import { useEffect, useState } from "react";
import ServicesCard from "../ServicesCard/ServicesCard";

const ServicesSection = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://car-doctor-server-alpha-ashy.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="container mx-auto">
      <div className="max-w-3xl text-center mx-auto space-y-4 mb-10">
        <h2 className="text-[#FF3811] text-2xl font-medium">Service</h2>
        <h2 className="text-5xl font-bold ">Our Service Area</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which do not look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
        {services.map((service, index) => (
          <ServicesCard key={index} service={service} />
        ))}
      </div>
      <div className="flex justify-center">
        <button className="btn bg-[#FF3811] text-white my-5">
          More Services
        </button>
      </div>
    </div>
  );
};

export default ServicesSection;
