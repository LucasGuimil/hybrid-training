import { Stack } from "expo-router";

export default function RootLayout() {
  return (
  <Stack>;
    <Stack.Screen name="index" options={{ title: "Home" }} />
    <Stack.Screen name="new-workout" options={{ title: "New Workout" }} />
    <Stack.Screen name="saved-workouts" options={{ title: "Saved Workouts" }} />
  </Stack>
  )
}
