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
            <Text style={styles.cardTitle}>๐ ๋น์ ์ ์ํ ์ถ์ฒ ์นดํ</Text>
            <View style={{ marginLeft: "auto" }}>
              <Button title="๋๋ณด๊ธฐ" />
            </View>
          </View>
          <View lightColor="rgba(0, 0, 0, 0.03)" style={styles.cardButton}>
            <Text style={{ fontSize: 18 }}>๊ณต์ฐจ ๋์ฐ๋ณ์์ </Text>
            <Text style={{ color: "#999", marginTop: 2 }}>174m</Text>
          </View>
          <View lightColor="rgba(0, 0, 0, 0.03)" style={styles.cardButton}>
            <Text
              style={{
                fontSize: 18,
              }}
            >
              ๋ง์๊ทธ๋์ด ๊ฐ์ฐฝ์ญ์ 
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
            ์ฌ์ฉ์ ์ ํธ๋ ๊ธฐ๋ฐ
          </Text>
        </View>

        <View style={styles.card}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Text style={styles.cardTitle}>๐งญ ์ฃผ๋ณ ์นดํ ํ์ํ๊ธฐ</Text>
            <View style={{ marginLeft: "auto" }}>
              <Button title="๋๋ณด๊ธฐ" />
            </View>
          </View>
          <Text
            style={{
              marginBottom: 10,
              textAlign: "center",
              color: "#8e8e8e",
            }}
          >
            ํ์ฌ ์์น๋ฅผ ๊ธฐ์ค์ผ๋ก ์ฃผ๋ณ ์นดํ ๋ชฉ๋ก์ด์์.
          </Text>
          <View lightColor="rgba(0, 0, 0, 0.03)" style={styles.cardButton}>
            <Text
              style={{
                fontSize: 18,
              }}
            >
              ํฌ์ธํ๋ ์ด์ค ๊ณ๋ช๋๋ณ์์ 
            </Text>
            <Text style={{ color: "#999", marginTop: 2 }}>128m</Text>
          </View>
          <View lightColor="rgba(0, 0, 0, 0.03)" style={styles.cardButton}>
            <Text
              style={{
                fontSize: 18,
              }}
            >
              ์ด๋์ผ์ปคํผ ๋๊ตฌํธ์ฐ๋์ 
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
