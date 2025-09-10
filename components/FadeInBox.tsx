import React, { useEffect, useRef } from "react";
import { Animated, View, Text, Easing } from "react-native";

export default function FadeInBox() {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
      delay: 1000,
      easing: Easing.inOut(Easing.ease),
    }).start();
  }, [opacity]);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Animated.View
        style={{
          opacity,
          padding: 24,
          backgroundColor: "green",
          borderRadius: 8,
        }}
      >
        <Text>Fades in</Text>
      </Animated.View>
    </View>
  );
}
