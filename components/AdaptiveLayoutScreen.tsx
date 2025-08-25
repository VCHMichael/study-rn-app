import { View, StyleSheet, useWindowDimensions, Dimensions } from 'react-native';

const AdaptiveLayoutScreen = () => {
  const { width, height } = useWindowDimensions();
  const isPortrait = height >= width;

  const width2 = Dimensions.get('screen').width; // difference ? 

  const styles = useStyles(false);

  return (
    <View style={[styles.container, { flexDirection: isPortrait ? 'column' : 'row' }]}>
      <View style={[styles.block, { backgroundColor: '#ef4444' }]} />
      <View style={[styles.block, { backgroundColor: '#22c55e' }]} />
      <View style={[styles.block, { backgroundColor: '#3b82f6' }]} />
    </View>
  );
};

const useStyles = (isPortrait: boolean) =>  StyleSheet.create({
  container: {
     padding: isPortrait ? 16: 24,
    gap: 12,
  },
  block: {
    flex: 1,
    minHeight: 100,
    borderRadius: 12,
  },
});

export default AdaptiveLayoutScreen;