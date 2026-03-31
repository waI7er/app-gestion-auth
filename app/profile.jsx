import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mon profil</Text>
      <Text style={styles.text}>Nom : Utilisateur demo</Text>
      <Text style={styles.text}>Email : demo@example.com</Text>

      <Link href="/tasks" style={styles.link}>
        Retour aux taches
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
  text: {
    fontSize: 16,
  },
  link: {
    color: "#2563eb",
    fontWeight: "600",
  },
});
