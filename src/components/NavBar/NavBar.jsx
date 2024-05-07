import logo from "../../assets/logo.svg";
import { AiOutlineShopping } from "react-icons/ai";
import { IoIosSearch } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAuthHooks from "../../hooks/useAuthHooks";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const NavBar = () => {
  const { user, logoutUser } = useAuthHooks();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  //handleLogoutUser
  const handleLogoutUser = () => {
    logoutUser()
      .then(() => {
        axiosSecure.get("/logout").then((res) => {
          if (res.data.logout) {
            toast.success("Logout successfull!");
            navigate("/");
          }
        });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const links = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/about">About</Link>
      </li>

      <li>
        <Link to="/services">Services</Link>
      </li>

      <li>
        <Link to="/blog">Blog</Link>
      </li>

      {user && (
        <li>
          <Link to={`/checkout/orderlist?email=${user.email}`}>OrderList</Link>
        </li>
      )}

      <li>
        <Link to="/contact">Contact</Link>
      </li>

      <li>
        <Link to="/register">Register</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-500">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="">
          <img src={logo} className="w-10 md:w-16" alt="Logo" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <button className="mr-1">
          <IoIosSearch />
        </button>
        <button className="mr-1">
          <AiOutlineShopping />
        </button>

        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={
                    user?.photoURL
                      ? user.photoURL
                      : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  }
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 mr-5"
            >
              <li>
                <a className="justify-between">{user?.displayName}</a>
              </li>
              <li>
                <Link onClick={handleLogoutUser}>Logout</Link>
              </li>
            </ul>
          </div>
        ) : (
          <Link
            to="/login"
            className="bg-[#FF3811] text-white px-2 py-1 mr-1 rounded-lg font-semibold"
          >
            Login
          </Link>
        )}

        <Link to="/" className="btn btn-outline btn-sm md:btn-md btn-error">
          Appointment
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
