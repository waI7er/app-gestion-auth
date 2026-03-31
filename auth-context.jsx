import { createContext, useContext, useMemo, useState } from "react";

const AuthContext = createContext(null);

const defaultPublicTasks = ["Tache publique 1", "Tache publique 2"];
const defaultPrivateTasks = ["Faire les courses", "Reviser React Native"];
const defaultRegisteredUser = {
  fullName: "Utilisateur demo",
  email: "demo@example.com",
};

export function AuthProvider({ children }) {
  const [registeredUser, setRegisteredUser] = useState(defaultRegisteredUser);
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState(defaultPrivateTasks);

  const value = useMemo(
    () => ({
      user,
      tasks,
      publicTasks: defaultPublicTasks,
      login() {
        setUser(registeredUser);
      },
      signup(profile) {
        setRegisteredUser(profile);
      },
      logout() {
        setUser(null);
      },
      addTask(title) {
        const trimmedTitle = title.trim();

        if (!trimmedTitle) {
          return false;
        }

        setTasks((currentTasks) => [...currentTasks, trimmedTitle]);
        return true;
      },
    }),
    [registeredUser, tasks, user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const value = useContext(AuthContext);

  if (!value) {
    throw new Error("useAuth must be used within AuthProvider");
  }

  return value;
}
