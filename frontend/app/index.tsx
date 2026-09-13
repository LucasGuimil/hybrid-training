
import Button from "@/components/Button";
import { CONTAINER_STYLES, TEXT_STYLES } from "@/constants/theme";
import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Hybrid Training App!</Text>
      <View style={styles.buttonContainer}>
        <Button title="New Workout" onPress={() => router.navigate("/new-workout")} />
        <Button title="View Saved Workouts" onPress={() => router.navigate("/saved-workouts")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...CONTAINER_STYLES.largeContainer
  },
  title: {
    ...TEXT_STYLES.title,
    marginBottom: 20
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  }
})