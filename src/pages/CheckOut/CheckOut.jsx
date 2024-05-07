import { useNavigate } from "react-router-dom";
import img1 from "../../assets/images/banner/4.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useAuthHooks from "../../hooks/useAuthHooks";

const CheckOut = () => {
  const { id } = useParams();
  const { user } = useAuthHooks();
  const [service, setService] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://car-doctor-server-alpha-ashy.vercel.app/services/${id}`)
      .then((res) => {
        setService(res.data);
      });
  }, [id]);

  // handle orderConfirm
  const handleOrderConfirm = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const date = form.date.value;
    const message = form.message.value;

    const order = {
      customerName: name,
      email,
      phone,
      date,
      message,
      img: service.img,
      title: service.title,
      price: service.price,
      status: false,
    };

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be confirm this order!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, confirm it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch("https://car-doctor-server-alpha-ashy.vercel.app/order", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(order),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              Swal.fire({
                title: "Confirmed!",
                text: "Your order has been confirmed.",
                icon: "success",
              });
              navigate("/");
            }
          });
      }
    });
  };

  return (
    <div className="max-w-6xl mx-auto mb-12">
      <div className="relative w-full h-[250px] mb-20">
        <img
          src={img1}
          alt=""
          className="w-full h-full object-cover rounded-xl"
        />
        <h2 className="text-4xl font-bold text-white absolute top-1/2 left-10">
          Check Out
        </h2>
        <h2 className="bg-[#FF3811] text-sm py-2 text-white w-48 rounded-t-3xl text-center absolute bottom-0 left-1/4 md:left-1/2">
          Home/Checkout
        </h2>
      </div>

      <div className="bg-[#F3F3F3] p-5 md:p-14 lg:16 rounded-xl">
        <form onSubmit={handleOrderConfirm}>
          <div className="flex flex-col md:flex-row gap-5 mb-4">
            <input
              className="px-4 py-2 rounded-lg border bg-white w-full"
              type="text"
              name="name"
              defaultValue={user?.displayName}
              placeholder="First Name"
            />
            <input
              className="px-4 py-2 rounded-lg border bg-white w-full"
              type="email"
              name="email"
              defaultValue={user?.email}
              placeholder="Your Email"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-5 mb-4">
            <input
              className="px-4 py-2 rounded-lg border bg-white w-full"
              type="text"
              name="phone"
              placeholder="Phone Number"
            />
            <input
              className="px-4 py-2 rounded-lg border bg-white w-full"
              type="date"
              name="date"
              placeholder="Date"
            />
          </div>
          <textarea
            name="message"
            type="text"
            rows="7"
            placeholder="Your Message..."
            className="block w-full px-4 py-2 rounded-xl autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100"
          ></textarea>
          <input
            type="submit"
            value="Order Confirm"
            className="btn w-full bg-[#FF3811] mt-8 text-white"
          />
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
