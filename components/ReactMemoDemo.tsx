import React, { memo, useState } from "react";
import { Button, Text, View } from "react-native";

type RowProps = { value: number };

// Rerenders only if props.value changes (shallow compare)
const Row = memo<RowProps>(({ value }) => {
  console.log("Row render", value);
  return <Text>Row value: {value}</Text>;
});
Row.displayName = "Row";

export default function ReactMemoDemo() {
  const [tick, setTick] = useState(0);
  return (
    <View style={{ padding: 16, gap: 8 }}>
      <Button
        title="Tick (parent rerender)"
        onPress={() => setTick((t) => t + 1)}
      />
      <Row value={1} />
      <Row value={2} />
      <Row value={3} />
      <Text>Parent tick: {tick}</Text>
    </View>
  );
}
