
import Button from "@/components/Button";
import { TEXT_STYLES } from "@/constants/theme";
import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Hybrid Training App!</Text>
      <View style={styles.buttonContainer}>
        <Button title="View Saved Workouts" onPress={() => router.navigate("/saved-workouts")} />
        <Button title="New Workout" onPress={() => router.navigate("/new-workout")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
    paddingTop: 60
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
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