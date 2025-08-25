import AdaptiveLayoutScreen from "@/components/AdaptiveLayoutScreen";
import ProductListScreen from "@/components/ProductListScreen";
import { StyleSheet, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      {/* <ProductListScreen /> */}
      <AdaptiveLayoutScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // paddingHorizontal: 16,
  },
});
