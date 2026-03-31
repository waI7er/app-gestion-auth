import { useEffect } from "react";
import { router } from "expo-router";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { useAuth } from "../auth-context";

export default function LogoutScreen() {
  const { logout } = useAuth();

  useEffect(() => {
    logout();

    const timeout = setTimeout(() => {
      router.replace("/");
    }, 300);

    return () => clearTimeout(timeout);
  }, [logout]);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
      <Text>Deconnexion en cours...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
  },
});
