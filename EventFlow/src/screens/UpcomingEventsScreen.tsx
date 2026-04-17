import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { ScreenHeader } from '../components/ScreenHeader';
import { colors } from '../theme/colors';

type UpcomingEventsScreenProps = {
  onBack: () => void;
};

const upcomingEvents = [
  { id: 'ev-01', time: '11.04', title: 'Koncert plenerowy Summer Beats', location: 'Amfiteatr Miejski' },
  { id: 'ev-02', time: '13.04', title: 'Targi ksiazki i komiksu', location: 'Centrum Expo' },
  { id: 'ev-03', time: '15.04', title: 'Noc filmowa pod gwiazdami', location: 'Park Centralny' },
  { id: 'ev-04', time: '18.04', title: 'Bieg charytatywny 5 km', location: 'Bulwary Nadwislanskie' },
  { id: 'ev-05', time: '20.04', title: 'Festiwal food truckow', location: 'Plac Wolnosci' },
  { id: 'ev-06', time: '22.04', title: 'Spektakl teatralny Hamlet', location: 'Teatr Miejski' },
  { id: 'ev-07', time: '24.04', title: 'Wystawa sztuki nowoczesnej', location: 'Galeria Nova' },
  { id: 'ev-08', time: '26.04', title: 'Turniej e-sportowy Open Cup', location: 'Hala Arena' },
  { id: 'ev-09', time: '28.04', title: 'Warsztaty ceramiczne', location: 'Dom Kultury' },
  { id: 'ev-10', time: '30.04', title: 'Wieczor stand-up comedy', location: 'Klub Scena' },
  { id: 'ev-11', time: '02.05', title: 'Parada zabytkowych samochodow', location: 'Rynek Glowny' },
  { id: 'ev-12', time: '05.05', title: 'Koncert muzyki filmowej', location: 'Filharmonia' },
];

export function UpcomingEventsScreen({ onBack }: UpcomingEventsScreenProps) {
  return (
    <View style={styles.container}>
      <Pressable onPress={onBack} style={({ pressed }) => [styles.backButton, pressed && styles.backButtonPressed]}>
        <Text style={styles.backButtonText}>Wroc</Text>
      </Pressable>

      <ScreenHeader
        eyebrow="Nadchodzace"
        title="12 Eventow"
        subtitle="Lista zaplanowanych wydarzen na dzis i jutro."
      />

      <ScrollView contentContainerStyle={styles.listContent} showsVerticalScrollIndicator={false}>
        {upcomingEvents.map(item => (
          <View key={item.id} style={styles.eventCard}>
            <Text style={styles.eventTime}>{item.time}</Text>
            <View style={styles.eventInfo}>
              <Text style={styles.eventTitle}>{item.title}</Text>
              <Text style={styles.eventLocation}>{item.location}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backButton: {
    alignSelf: 'flex-start',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.surfaceAlt,
    backgroundColor: colors.surface,
    paddingHorizontal: 14,
    paddingVertical: 8,
    marginBottom: 18,
  },
  backButtonPressed: {
    opacity: 0.85,
  },
  backButtonText: {
    color: colors.textPrimary,
    fontSize: 14,
    fontWeight: '600',
  },
  listContent: {
    gap: 12,
    paddingBottom: 8,
  },
  eventCard: {
    flexDirection: 'row',
    gap: 12,
    backgroundColor: colors.surface,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.surfaceAlt,
    padding: 14,
  },
  eventTime: {
    color: colors.accent,
    fontSize: 16,
    fontWeight: '700',
    minWidth: 50,
  },
  eventInfo: {
    flex: 1,
  },
  eventTitle: {
    color: colors.textPrimary,
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 4,
  },
  eventLocation: {
    color: colors.textSecondary,
    fontSize: 13,
  },
});
