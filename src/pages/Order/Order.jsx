import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import img1 from "../../assets/images/banner/4.jpg";
import axios from "axios";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Order = () => {
  const axiosSecure = useAxiosSecure();
  const [orderList, setOrderList] = useState([]);
  // const [status, setStatus] = useState(false);
  const { user } = useContext(AuthContext);
  const url = `/orderlist?email=${user?.email}`;

  // handleUpdateStatus
  const handleUpdateStatus = (id) => {
    axios
      .put(
        "https://car-doctor-server-alpha-ashy.vercel.app/order/status/update",
        { id }
      )
      .then((res) => {
        if (res.data.acknowledged) {
          const reamainingOrders = orderList.filter(
            (order) => order._id !== id
          );
          const updatedOrder = orderList.find((order) => order._id !== id);

          const newOrder = [updatedOrder, ...reamainingOrders];
          setOrderList(newOrder);

          toast.success("Order is approved successfully!");
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  // handleDeleteOrder
  const handleDeleteOrder = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/order/delete/${id}`).then((res) => {
          if (res.data.acknowledged) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
        const remainingOrder = orderList.filter((order) => order._id !== id);
        setOrderList(remainingOrder);
      }
    });
  };

  useEffect(() => {
    axiosSecure
      .get(url, { withCredentials: true })
      .then((res) => {
        setOrderList(res.data);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  }, [url, axiosSecure]);

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
          Home/My Order
        </h2>
      </div>

      {/* table_area */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Images</th>
              <th>Service Name</th>
              <th>Price</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orderList?.reverse().map((item, index) => (
              <tr key={index}>
                <th>
                  <button
                    onClick={() => handleDeleteOrder(item._id)}
                    className="btn btn-circle btn-outline btn-sm"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </th>
                <td>
                  <div className="avatar">
                    <div className=" w-28 h-28 rounded-xl">
                      <img src={item?.img} alt="service img" />
                    </div>
                  </div>
                </td>
                <td>
                  <div>
                    <div className="font-bold">{item.title}</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </td>
                <td>
                  <span className="badge badge-ghost badge-sm">
                    {item?.price}
                  </span>
                </td>
                <td>{item.date}</td>
                <td>
                  {item.status ? (
                    <button className="btn btn-sm btn-outline btn-success">
                      Approved
                    </button>
                  ) : (
                    <button
                      onClick={() => handleUpdateStatus(item._id)}
                      className="bg-[#FF3811] text-white btn btn-sm rounded-lg"
                    >
                      Pending
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Order;
