// ProductListScreen.jsx
import React from "react";
import { ScrollView, View, StyleSheet, Alert } from "react-native";
import ProductCard from "./ProductCard/ProductCard";
import CustomButton from "./CustomButton/CustomButton";

const PRODUCTS = [
  {
    id: "1",
    title: "Wireless Headphones",
    price: 59.99,
    imageUrl: "https://picsum.photos/seed/p1/600/400",
  },
  {
    id: "2",
    title: "Smart Watch",
    price: 129.0,
    imageUrl: "https://picsum.photos/seed/p2/600/400",
  },
  {
    id: "3",
    title: "Bluetooth Speaker",
    price: 39.5,
    imageUrl: "https://picsum.photos/seed/p3/600/400",
  },
  {
    id: "4",
    title: "Gaming Mouse",
    price: 24.99,
    imageUrl: "https://picsum.photos/seed/p4/600/400",
  },
  {
    id: "5",
    title: "Mechanical Keyboard",
    price: 89.0,
    imageUrl: "https://picsum.photos/seed/p5/600/400",
  },
  {
    id: "6",
    title: "USB-C Hub",
    price: 34.99,
    imageUrl: "https://picsum.photos/seed/p6/600/400",
  },
  {
    id: "7",
    title: "Portable SSD",
    price: 149.99,
    imageUrl: "https://picsum.photos/seed/p7/600/400",
  },
];

const ProductListScreen = () => {
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {PRODUCTS.map((p) => (
        <View key={p.id} style={styles.cardWrapper}>
          <ProductCard title={p.title} price={p.price} imageUrl={p.imageUrl} />
          <CustomButton
            title="Buy"
            onPress={() => Alert.alert("Buy", `You selected: ${p.title}`)}
          />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 24,
  },
  cardWrapper: {
    marginBottom: 16,
    gap: 8,
  },
});

export default ProductListScreen;
