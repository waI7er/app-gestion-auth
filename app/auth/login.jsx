import { useNavigate } from "react-router-dom";

export default function Login({ setAuth }) {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setAuth(true);
    navigate("/tasks");
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Connexion</h2>
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Mot de passe" required />
      <button type="submit">Se connecter</button>
    </form>
  );
}
