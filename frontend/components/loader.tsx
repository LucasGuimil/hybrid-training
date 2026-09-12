import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
export default function Loader() {
    return (
        <View style={styles.center} testID="loading-indicator">
            <ActivityIndicator size="large" color="#01015f" />
            <Text>Loading exercises...</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
