import React, { useCallback } from "react";
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

  const renderItem = useCallback(
    ({ item }: { item: (typeof PRODUCTS_DATA)[0] }) => {
      const handleOnPress = (id: string) =>
        navigation.navigate(ROUTES.PRODUCT_DETAILS, { id });
      return (
        <View style={styles.cardWrapper}>
          <ProductCard
            title={item.title}
            price={item.price}
            imageUrl={item.imageUrl}
          />
          <CustomButton title="Buy" onPress={() => handleOnPress(item.id)} />
        </View>
      );
    },
    [navigation]
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
