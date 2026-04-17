import { StyleSheet, View } from 'react-native';
import { ScreenCards } from '../components/ScreenCards';
import { ScreenHeader } from '../components/ScreenHeader';

const cards = [
  { title: '09:00', value: 'Otwarcie konferencji' },
  { title: '11:30', value: 'Warsztaty produktowe' },
];

export function ScheduleScreen() {
  return (
    <View style={styles.container}>
      <ScreenHeader
        eyebrow="Harmonogram"
        title="Plan dnia"
        subtitle="Szybki podglad najwazniejszych punktow programu."
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
