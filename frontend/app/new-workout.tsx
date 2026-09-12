import { TEXT_STYLES , COLORS} from "@/constants/theme";
import { View, Text, StyleSheet } from "react-native";

export default function NewWorkoutScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>New Workout</Text>
            <Text style={styles.subtitle}>This is where you can create a new workout.</Text>
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
        marginBottom: 20,
    },
    subtitle: {
        ...TEXT_STYLES.subtitle,
        color: COLORS.textPrimary,
    }
})