import { Link } from "react-router-dom";

export default function Tasks() {
  return (
    <div>
      <h1>Mes Tâches Personnelles</h1>
      <Link to="/tasks/new">+ Créer une tâche</Link>
      <br />
      <Link to="/profile">Voir mon profil</Link>
      <br />
      <Link to="/logout">Se déconnecter</Link>
    </div>
  );
}
