import { COLORS, CONTAINER_STYLES, TEXT_STYLES } from "@/constants/theme";
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";
import { Exercise } from "@/interfaces/index";

export default function ExerciseList() {
  
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [loading, setLoading] = useState(true);
  const apiUrl = process.env.EXPO_PUBLIC_API_URL
  
  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const response = await fetch(`${apiUrl}/exercises`);
        const data = await response.json();
        setExercises(data);
      } catch (error) {
        console.error("Error fetching exercises:", error);  
      } finally {
        setLoading(false);
      }
    }
    fetchExercises();
  }, []);
  
  if (loading) {
    return (
      <View style={styles.center} testID="loading-indicator">
        <ActivityIndicator size="large" color={COLORS.primary} />
        <Text>Loading exercises...</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Exercises</Text>
      <FlatList testID="exercises-list" data={exercises} keyExtractor={(item)=> item.id}
        renderItem={({item}) => (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.name}</Text>
            <Text style={styles.cardSubtitle}>{item.category} • {item.muscleGroup}</Text>
          </View>
        )}
      />
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
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  card: { 
    backgroundColor: 'white', 
    padding: 16, 
    borderRadius: 12, 
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3 
  },
  cardTitle: { 
    fontSize: 18, 
    fontWeight: 'bold',
    color: '#111827'
  },
  cardSubtitle: { 
    fontSize: 14, 
    color: '#6b7280', 
    marginTop: 4 
  }
})