import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function NewTaskScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nouvelle tache</Text>
      <TextInput placeholder="Titre de la tache" style={styles.input} />
      <TextInput
        placeholder="Description"
        multiline
        numberOfLines={4}
        style={[styles.input, styles.textarea]}
      />

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Enregistrer</Text>
      </Pressable>

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
    gap: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
  },
  input: {
    borderWidth: 1,
    borderColor: "#cbd5e1",
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  textarea: {
    minHeight: 120,
    textAlignVertical: "top",
  },
  button: {
    backgroundColor: "#2563eb",
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "700",
  },
  link: {
    color: "#2563eb",
    fontWeight: "600",
    textAlign: "center",
  },
});
