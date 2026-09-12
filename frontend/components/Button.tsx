import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { COLORS, TEXT_STYLES } from "../constants/theme";

export default function Button({ title, onPress }: { title: string, onPress: () => void }) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: COLORS.primary,
        padding: 10,
    borderRadius: 5,
    width: '48%'
    },
    buttonText: {
        ...TEXT_STYLES.buttonText,
        color: COLORS.textSecondary,
    }
})