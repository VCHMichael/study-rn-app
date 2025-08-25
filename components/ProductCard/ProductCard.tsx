import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { IProductCardProps } from './types';
import { IS_IOS } from '@/constants/platform';

const ProductCard = ({ title, price, imageUrl }: IProductCardProps) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: imageUrl }} style={styles.image} resizeMode="cover" />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>${price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    backgroundColor: IS_IOS ? '#fff' : '#f8f8f8',
    padding: 12,
    marginVertical: 8,
    //IOS
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    //Android
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 140,
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    color: '#111',
    marginBottom: 4,
  },
  price: {
    fontSize: 14,
    color: '#2e7d32',
    fontWeight: '600',
  },
});

export default ProductCard;