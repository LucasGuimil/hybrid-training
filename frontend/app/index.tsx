import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";


type Exercise = {
  id: string;
  name: string;
  image?: string;
  category: string;
  description?: string;
  muscleGroup: string;
  timeBased: boolean;
};



export default function HomeScreen() {
  
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
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#01015f" />
        <Text>Loading exercises...</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Exercises</Text>
      <FlatList data={exercises} keyExtractor={(item)=> item.id}
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
    fontSize: 28, 
    fontWeight: 'bold', 
    marginBottom: 20,
    color: '#1f2937'
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