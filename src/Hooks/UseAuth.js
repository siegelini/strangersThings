import { useContext } from "react";
import { AuthContext } from "../components/AuthProvider";

export function useAuth() {
  const { token, setToken } = useContext(AuthContext);
  return { token, setToken };
}

export default useAuth;
