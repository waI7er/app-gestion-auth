import { Link, Redirect } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { useAuth } from "../auth-context";

export default function TasksScreen() {
  const { tasks, user } = useAuth();

  if (!user) {
    return <Redirect href="/login" />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mes taches personnelles</Text>
      {tasks.map((task) => (
        <Text key={task} style={styles.item}>
          - {task}
        </Text>
      ))}
      <Link href="/tasks/new" style={styles.link}>
        + Creer une tache
      </Link>
      <Link href="/profile" style={styles.link}>
        Voir mon profil
      </Link>
      <Link href="/logout" style={styles.link}>
        Se deconnecter
      </Link>
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
  item: {
    fontSize: 16,
  },
  link: {
    color: "#2563eb",
    fontSize: 16,
    fontWeight: "600",
  },
});
