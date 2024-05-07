import axios from "axios";
import { useEffect } from "react";
import useAuthHooks from "./useAuthHooks";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "https://car-doctor-server-alpha-ashy.vercel.app",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { logoutUser } = useAuthHooks();
  const navigate = useNavigate();

  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        if (error.response.status === 401 || error.response.status === 403) {
          logoutUser();
          axiosSecure.get("/logout");
          navigate("/login");
        }
      }
    );
  }, [logoutUser, navigate]);

  return axiosSecure;
};

export default useAxiosSecure;
