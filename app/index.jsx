import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { useAuth } from "../auth-context";

export default function HomeScreen() {
  const { publicTasks, user } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenue sur To-Do App</Text>
      <Text style={styles.subtitle}>Liste des taches publiques :</Text>
      {publicTasks.map((task) => (
        <Text key={task} style={styles.item}>
          - {task}
        </Text>
      ))}

      {user ? (
        <Link href="/tasks" style={styles.link}>
          Gerer mes taches
        </Link>
      ) : (
        <>
          <Link href="/login" style={styles.link}>
            Se connecter
          </Link>
          <Link href="/signup" style={styles.link}>
            Creer un compte
          </Link>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
    gap: 12,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
  },
  subtitle: {
    fontSize: 18,
    marginTop: 8,
  },
  item: {
    fontSize: 16,
  },
  link: {
    color: "#2563eb",
    fontSize: 16,
    fontWeight: "600",
  },
});
