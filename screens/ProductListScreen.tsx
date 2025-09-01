import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import ProductCard from "../components/ProductCard/ProductCard";
import CustomButton from "../components/CustomButton/CustomButton";
import { PRODUCTS_DATA } from "@/store/productsData";
import { useNavigation } from "@react-navigation/native";
import { ROUTES } from "@/navigation/routes";
import type { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation/types";

const ProductListScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handleOnPress = (id: string) =>
    navigation.navigate(ROUTES.PRODUCT_DETAILS, { id });

  const renderItem = ({ item }: { item: (typeof PRODUCTS_DATA)[0] }) => (
    <View style={styles.cardWrapper}>
      <ProductCard
        title={item.title}
        price={item.price}
        imageUrl={item.imageUrl}
      />
      <CustomButton title="Buy" onPress={() => handleOnPress(item.id)} />
    </View>
  );

  return (
    <FlatList
      data={PRODUCTS_DATA}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      contentContainerStyle={styles.container}
    />
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
