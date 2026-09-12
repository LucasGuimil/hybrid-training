import { TextStyle } from "react-native"

export const COLORS = {
    primary: "#FF5800",
    secondary: "#f5f5f5",
    textPrimary: "#1f2937",
    textSecondary: "#fff",
}

export const TEXT_STYLES = {
    title: <TextStyle> {
        fontSize: 28,
        fontWeight: 'bold',
        color: COLORS.textPrimary
    },
    subtitle: <TextStyle>{
        fontSize: 16,
        fontWeight: 'bold',
        color: COLORS.textPrimary
    },
    buttonText: <TextStyle>{
        color: COLORS.textSecondary,
        textAlign: 'center',
        fontWeight: "bold",
    }
}

