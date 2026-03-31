import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <form onSubmit={handleSignup}>
      <h2>Inscription</h2>
      <button type="submit">Créer mon compte</button>
    </form>
  );
}
