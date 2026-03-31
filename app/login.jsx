import { Link, Redirect, router } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { useAuth } from "../auth-context";

export default function LoginScreen() {
  const { login, user } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (user) {
    return <Redirect href="/tasks" />;
  }

  const handleLogin = () => {
    if (!email.trim() || !password.trim()) {
      return;
    }

    login();
    router.replace("/tasks");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Connexion</Text>
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

      <Pressable onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Se connecter</Text>
      </Pressable>

      <Link href="/signup" style={styles.link}>
        Je n&apos;ai pas encore de compte
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
