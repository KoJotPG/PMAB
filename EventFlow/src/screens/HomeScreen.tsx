import { StyleSheet, View } from 'react-native';
import { ScreenCards } from '../components/ScreenCards';
import { ScreenHeader } from '../components/ScreenHeader';

const cards = [
  { title: 'Nadchodzace', value: '12 eventow' },
  { title: 'Uczestnicy', value: '248 osob' },
];

export function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScreenHeader
        eyebrow="Dashboard"
        title="EventFlow"
        subtitle="Zarzadzaj wydarzeniami w jednym miejscu."
      />
      <ScreenCards cards={cards} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
