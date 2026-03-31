import { Link, Redirect } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { useAuth } from "../auth-context";

export default function ProfileScreen() {
  const { user } = useAuth();

  if (!user) {
    return <Redirect href="/login" />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mon profil</Text>
      <Text style={styles.text}>Nom : {user.fullName}</Text>
      <Text style={styles.text}>Email : {user.email}</Text>

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
