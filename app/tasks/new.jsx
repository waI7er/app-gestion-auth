import { Link, Redirect, router } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { useAuth } from "../../auth-context";

export default function NewTaskScreen() {
  const { addTask, user } = useAuth();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  if (!user) {
    return <Redirect href="/login" />;
  }

  const handleSave = () => {
    const created = addTask(title || description);

    if (!created) {
      return;
    }

    router.replace("/tasks");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nouvelle tache</Text>
      <TextInput onChangeText={setTitle} placeholder="Titre de la tache" style={styles.input} value={title} />
      <TextInput
        placeholder="Description"
        multiline
        numberOfLines={4}
        onChangeText={setDescription}
        style={[styles.input, styles.textarea]}
        value={description}
      />

      <Pressable onPress={handleSave} style={styles.button}>
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
