import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme/colors';

export type ScreenCard = {
  title: string;
  value: string;
};

type ScreenCardsProps = {
  cards: ScreenCard[];
};

export function ScreenCards({ cards }: ScreenCardsProps) {
  return (
    <View style={styles.content}>
      {cards.map(card => (
        <View key={card.title} style={styles.card}>
          <Text style={styles.cardTitle}>{card.title}</Text>
          <Text style={styles.cardValue}>{card.value}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    gap: 16,
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: 18,
    padding: 20,
    borderWidth: 1,
    borderColor: colors.surfaceAlt,
  },
  cardTitle: {
    color: colors.textSecondary,
    fontSize: 14,
    marginBottom: 10,
  },
  cardValue: {
    color: colors.textPrimary,
    fontSize: 22,
    fontWeight: '700',
  },
});
