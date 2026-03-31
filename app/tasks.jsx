import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function TasksScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mes taches personnelles</Text>
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
  link: {
    color: "#2563eb",
    fontSize: 16,
    fontWeight: "600",
  },
});
