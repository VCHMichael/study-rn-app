import { View, Text, Image, StyleSheet } from "react-native";
import React, { useLayoutEffect } from "react";
import { PRODUCTS_DATA } from "@/store/productsData";

import { StackScreenProps } from "@react-navigation/stack";
import { ROUTES } from "@/navigation/routes";
import { RootStackParamList } from "../navigation/types";

type Props = StackScreenProps<
  RootStackParamList,
  typeof ROUTES.PRODUCT_DETAILS
>;

const ProductDetailsScreen = ({ route, navigation }: Props) => {
  const { id } = route.params;

  const productItem = PRODUCTS_DATA.find((i) => i.id === id);

  useLayoutEffect(() => {
    navigation.setOptions({ title: productItem?.title ?? "Product Details" });
  }, [navigation, productItem?.title]);

  if (!productItem) {
    return (
      <View style={styles.card}>
        <Text style={styles.title}>Product not found</Text>
      </View>
    );
  }

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
