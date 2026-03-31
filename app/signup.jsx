import { router } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { useAuth } from "../auth-context";

export default function SignupScreen() {
  const { signup } = useAuth();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    if (!fullName.trim() || !email.trim() || !password.trim()) {
      return;
    }

    signup({
      fullName: fullName.trim(),
      email: email.trim(),
    });
    router.replace("/login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inscription</Text>
      <TextInput onChangeText={setFullName} placeholder="Nom complet" style={styles.input} value={fullName} />
      <TextInput
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={setEmail}
        style={styles.input}
        value={email}
      />
      <TextInput
        placeholder="Mot de passe"
        secureTextEntry
        onChangeText={setPassword}
        style={styles.input}
        value={password}
      />

      <Pressable onPress={handleSignup} style={styles.button}>
        <Text style={styles.buttonText}>Creer mon compte</Text>
      </Pressable>
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
  button: {
    backgroundColor: "#16a34a",
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "700",
  },
});
