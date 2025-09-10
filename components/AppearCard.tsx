import React, { useEffect } from "react";
import { View, Text } from "react-native";
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
} from "react-native-reanimated";

export default function AppearCard() {
  const opacity = useSharedValue(0);
  const scale = useSharedValue(0.9);

  useEffect(() => {
    opacity.value = withTiming(1, { duration: 5000 }, () =>
      console.log("Animation opacity finished")
    );
    scale.value = withTiming(1.3, {
      duration: 400,
      easing: Easing.out(Easing.cubic),
    });
  }, [opacity, scale]);

  const animatedStyles = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ scale: scale.value }],
  }));

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Animated.View
        style={[
          { padding: 24, backgroundColor: "grey", borderRadius: 12 },
          animatedStyles,
        ]}
      >
        <Text>Reanimated Appear</Text>
      </Animated.View>
    </View>
  );
}
