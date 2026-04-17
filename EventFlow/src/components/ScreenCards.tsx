import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme/colors';

export type ScreenCard = {
  key?: string;
  title: string;
  value: string;
  onPress?: () => void;
};

type ScreenCardsProps = {
  cards: ScreenCard[];
};

export function ScreenCards({ cards }: ScreenCardsProps) {
  return (
    <View style={styles.content}>
      {cards.map(card => {
        const elementKey = card.key ?? card.title;

        if (card.onPress) {
          return (
            <Pressable
              key={elementKey}
              onPress={card.onPress}
              style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}>
              <Text style={styles.cardTitle}>{card.title}</Text>
              <Text style={styles.cardValue}>{card.value}</Text>
            </Pressable>
          );
        }

        return (
          <View key={elementKey} style={styles.card}>
            <Text style={styles.cardTitle}>{card.title}</Text>
            <Text style={styles.cardValue}>{card.value}</Text>
          </View>
        );
      })}
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
  cardPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.99 }],
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
