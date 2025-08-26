import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { PRODUCTS_DATA } from "@/store/productsData";

const ProductDetailsScreen = ({ route }: any) => {
  const productId = route.params.id;

  const productItem = PRODUCTS_DATA.find((i) => i.id === productId);

  return (
    <View style={styles.card}>
      <Image
        source={{ uri: productItem.imageUrl }}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.title}>{productItem.title}</Text>
      <Text style={styles.price}>${productItem.price}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
    marginVertical: 8,
  },
  image: {
    width: "100%",
    height: 140,
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    color: "#111",
    marginBottom: 4,
  },
  price: {
    fontSize: 14,
    color: "#2e7d32",
    fontWeight: "600",
  },
});

export default ProductDetailsScreen;
