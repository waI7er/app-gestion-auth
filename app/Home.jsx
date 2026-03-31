import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Bienvenue sur To-Do App</h1>
      <p>Liste des tâches publiques :</p>
      <ul>
        <li>Tâche publique 1</li>
        <li>Tâche publique 2</li>
      </ul>
      <Link to="/auth/login">
        <button>Se connecter pour gérer mes tâches</button>
      </Link>
    </div>
  );
}
