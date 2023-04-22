import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout(props) {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("token");
    props.setToken(null);
    navigate("/");
  }, [navigate, props]);

  return null;
}

export default Logout;
