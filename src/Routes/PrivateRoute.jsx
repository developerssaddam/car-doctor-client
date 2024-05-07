import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import loadingImg from "../assets/images/loading.gif";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <img src={loadingImg} alt="" />
      </div>
    );
  }

  if (user) {
    return <div>{children}</div>;
  } else {
    return <Navigate to="/login" state={location.pathname}></Navigate>;
  }
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
