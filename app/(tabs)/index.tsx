import { StyleSheet }                  from "react-native";
import { HelloWave }                   from "@/components/HelloWave";
import { ThemedText }                  from "@/components/ThemedText";
import { ThemedView }                  from "@/components/ThemedView";

export default function HomeScreen() {
  return (
    <ThemedView   style={styles.titleContainer}>
      <ThemedText type="title">Seja Bem Vindo!</ThemedText>
      <HelloWave />
    </ThemedView>
  );
}
const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems:    "center",
    gap: 8,
  },
});
