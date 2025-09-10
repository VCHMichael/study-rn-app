import React, { useMemo, useState } from "react";
import { TextInput, Text, View } from "react-native";

const data = Array.from({ length: 20000 }, (_, i) => `Item ${i}`);

export default function MemoDemo() {
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const lower = q.toLowerCase();
    return data.filter((x) => x.toLowerCase().includes(lower));
  }, [q]);

    const filteredWithoutMemo = () => {
    const lower = q.toLowerCase();
    return data.filter((x) => x.toLowerCase().includes(lower));
  };

  return (
    <View style={{ padding: 16, gap: 8 }}>
      <TextInput
        value={q}
        onChangeText={setQ}
        placeholder="Type to filter..."
        style={{ borderWidth: 1, padding: 8 }}
      />
      <Text>Found: {filtered.length}</Text>
    </View>
  );
}
