import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
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

  // NESTED NAVIGATION
  // navigation.navigate(ROUTES.PRODUCT_DETAILS, { screen: 'NAME_SCREEN', params: { id } });

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {PRODUCTS_DATA.map((product) => (
        <View key={product.id} style={styles.cardWrapper}>
          <ProductCard
            title={product.title}
            price={product.price}
            imageUrl={product.imageUrl}
          />
          <CustomButton title="Buy" onPress={() => handleOnPress(product.id)} />
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
