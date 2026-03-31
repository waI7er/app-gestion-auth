import { useNavigate } from "react-router-dom";
import { View, Link } from "react-router-dom";

export default function Login({ setAuth }) {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setAuth(true);
    navigate("/tasks");
  };

  return (
    <View>
      <h1>Bienvenue sur To-Do App</h1>
      <p>Liste des tâches publiques :</p>
      <ul>
        <li>Tâche publique 1</li>
        <li>Tâche publique 2</li>
      </ul>
      <Link to="/login">
        <button>Se connecter pour gérer mes tâches</button>
      </Link>

      <form onSubmit={handleLogin}>
        <h2>Connexion</h2>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Mot de passe" required />
        <button type="submit">Se connecter</button>
      </form>
    </View>
  );
}
