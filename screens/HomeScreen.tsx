import { Button, ScrollView, StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 22,
            fontWeight: "bold",
            paddingBottom: 10,
            color: "gray",
          }}
        >
          CafeApp
        </Text>

        <View style={styles.card}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Text style={styles.cardTitle}>💎 당신을 위한 추천 카페</Text>
            <View style={{ marginLeft: "auto" }}>
              <Button title="더보기" />
            </View>
          </View>
          <View lightColor="rgba(0, 0, 0, 0.03)" style={styles.cardButton}>
            <Text
              style={{
                fontSize: 18,
              }}
            >
              공차 동산병원점
            </Text>
            <Text style={{ color: "#999", marginTop: 2 }}>174m</Text>
          </View>
          <View lightColor="rgba(0, 0, 0, 0.03)" style={styles.cardButton}>
            <Text
              style={{
                fontSize: 18,
              }}
            >
              마시그래이 강창역점
            </Text>
            <Text style={{ color: "#999", marginTop: 2 }}>71m</Text>
          </View>

          <Text
            style={{
              marginTop: 8,
              paddingHorizontal: 5,
              color: "#8a8c8f",
            }}
          >
            사용자 선호도 기반
          </Text>
        </View>

        <View style={styles.card}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Text style={styles.cardTitle}>🧭 주변 카페 탐색하기</Text>
            <View style={{ marginLeft: "auto" }}>
              <Button title="더보기" />
            </View>
          </View>
          <Text
            style={{
              marginBottom: 10,
              textAlign: "center",
              color: "#8e8e8e",
            }}
          >
            현재 위치를 기준으로 주변 카페 목록이에요.
          </Text>
          <View lightColor="rgba(0, 0, 0, 0.03)" style={styles.cardButton}>
            <Text
              style={{
                fontSize: 18,
              }}
            >
              투썸플레이스 계명대병원점
            </Text>
            <Text style={{ color: "#999", marginTop: 2 }}>128m</Text>
          </View>
          <View lightColor="rgba(0, 0, 0, 0.03)" style={styles.cardButton}>
            <Text
              style={{
                fontSize: 18,
              }}
            >
              이디야커피 대구호산동점
            </Text>
            <Text style={{ color: "#999", marginTop: 2 }}>212m</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#efeff2",
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 8,
    height: 0,
    width: "100%",
    borderBottomWidth: 1,
    borderColor: "#dfdfdf",
  },
  cardButton: {
    paddingVertical: 15,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginVertical: 4,
  },
  card: {
    backgroundColor: "#fafaff",
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 30,
    marginVertical: 10,
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 12,
    marginVertical: 5,
  },
});
