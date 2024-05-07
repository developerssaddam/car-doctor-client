import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useAuthHooks = () => {
  const auth = useContext(AuthContext);
  return auth;
};

export default useAuthHooks;
