import { StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 28, fontWeight: "bold", paddingBottom: 24 }}>
        👋 OOO님, 안녕하세요!
      </Text>
      <View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            paddingBottom: 12,
          }}
        >
          💎 당신을 위한 추천 카페
        </Text>
      </View>
      <View>
        {Array.from(Array(5).keys()).map(() => (
          <View
            lightColor="rgba(0, 0, 0, 0.05)"
            style={{
              paddingVertical: 10,
              paddingHorizontal: 16,
              borderRadius: 12,
              marginBottom: 4,
            }}
          >
            <Text
              style={{
                fontSize: 20,
              }}
            >
              OOO
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 20,
    height: 1,
    width: "100%",
  },
});
