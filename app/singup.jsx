import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";

export default function Signup() {
  const router = useRouter();

  const handleSignup = () => {
    console.log("Compte créé");
    router.replace("/login");
  };

  return (
    <View>
      <Text>Inscription</Text>

      <TouchableOpacity onPress={handleSignup}>
        <Text>Créer mon compte</Text>
      </TouchableOpacity>
    </View>
  );
}
