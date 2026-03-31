import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Tasks from "./pages/Tasks";
import NewTask from "./pages/NewTask";
import Profile from "./pages/Profile";
import Logout from "./pages/Logout";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/login"
          element={
            isAuthenticated ? (
              <Navigate to="/tasks" />
            ) : (
              <Login setAuth={setIsAuthenticated} />
            )
          }
        />

        <Route
          path="/signup"
          element={isAuthenticated ? <Navigate to="/tasks" /> : <Signup />}
        />

        <Route
          path="/tasks"
          element={isAuthenticated ? <Tasks /> : <Navigate to="/login" />}
        />

        <Route
          path="/tasks/new"
          element={isAuthenticated ? <NewTask /> : <Navigate to="/login" />}
        />

        <Route
          path="/profile"
          element={isAuthenticated ? <Profile /> : <Navigate to="/login" />}
        />

        <Route
          path="/../auth/logout"
          element={<Logout setAuth={setIsAuthenticated} />}
        />
      </Routes>
    </Router>
  );
}
