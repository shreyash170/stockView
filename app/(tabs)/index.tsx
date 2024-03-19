import { StyleSheet, View, Pressable, FlatList } from "react-native";
import { Text } from "react-native-paper";
import { router } from "expo-router";
import { stocks } from "@/data";
import { Image } from "expo-image";

export default function HomeScreen() {
  return (
    <View style={styles.homeContainer}>
      <Text variant="titleLarge" style={styles.titleText}>
        Available Stocks
      </Text>
      <FlatList
        keyExtractor={(item) => item.ticker}
        data={stocks}
        renderItem={({ item }) => (
          <Pressable
            style={styles.companyDetails}
            onPress={() => router.push(`/${item.ticker}`)}
          >
            <Image
              source={item.image}
              style={styles.companyLogo}
              contentFit="contain"
            />
            <Text>{item.ticker}</Text>
            <Text>{item.companyName}</Text>
            <Text>{item.price}</Text>
            <Text>
              {item.priceChange} {item.priceChangePercentage}
            </Text>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    paddingTop: 30,
  },
  titleText: {
    fontWeight: "bold",
    marginLeft: 5,
    marginBottom: 5,
  },
  companyLogo: {
    height: 50,
    width: 50,
  },
  companyDetails: {
    flexDirection: "row",
    marginVertical: 10,
    paddingHorizontal: 10,
  },
});
