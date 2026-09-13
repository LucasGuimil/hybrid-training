import { COLORS, CONTAINER_STYLES, TEXT_STYLES } from "@/constants/theme";
import { View, Text, StyleSheet } from "react-native";

export default function SavedWorkoutsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Saved Workouts</Text>
      <Text style={styles.subtitle}>This is where you can view your saved workouts.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        ...CONTAINER_STYLES.largeContainer
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        ...TEXT_STYLES.title,
        marginBottom: 20,
    },
    subtitle: {
        ...TEXT_STYLES.subtitle,
        color: COLORS.textPrimary,
    }
})