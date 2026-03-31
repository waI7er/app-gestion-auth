import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Logout({ setAuth }) {
  const navigate = useNavigate();

  useEffect(() => {
    setAuth(false);
    navigate("/login");
  }, [setAuth, navigate]);

  return <p>Déconnexion en cours...</p>;
}
