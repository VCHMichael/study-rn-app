import React, { useCallback, useState } from "react";
import { Text, View } from "react-native";
import CustomButton from "./CustomButton/CustomButton";

const ChildButton = ({ onIncrement }: { onIncrement: () => void }) => {
  console.log("ChildButton render"); // will NOT rerender if onIncrement is stable and parent count changes
  return <CustomButton title="Increment" onPress={onIncrement} />;
};

export default function CallbackDemo() {
  const [count, setCount] = useState(0);

  const handleIncrement = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  return (
    <View style={{ padding: 16 }}>
      <Text>Count: {count}</Text>
      <ChildButton onIncrement={handleIncrement} />
    </View>
  );
}
