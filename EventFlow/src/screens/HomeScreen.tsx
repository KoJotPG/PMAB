import { StyleSheet, View } from 'react-native';
import { ScreenCards } from '../components/ScreenCards';
import { ScreenHeader } from '../components/ScreenHeader';
import type { ScreenKey } from '../types/navigation';

type HomeScreenProps = {
  onNavigate: (screen: ScreenKey) => void;
};

export function HomeScreen({ onNavigate }: HomeScreenProps) {
  const cards = [
    {
      key: 'upcoming',
      title: 'Nadchodzace',
      value: '12 eventow',
      onPress: () => onNavigate('upcomingEvents'),
    },
    { key: 'attendees', title: 'Uczestnicy', value: '248 osob' },
  ];

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
