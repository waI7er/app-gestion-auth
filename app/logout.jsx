import { useEffect } from "react";
import { useNavigate } from "expo-router";

export default function Logout({ setAuth }) {
  const navigate = useNavigate();

  useEffect(() => {
    setAuth(false);
    navigate("/login");
  }, [setAuth, navigate]);

  return <p>Déconnexion en cours...</p>;
}
