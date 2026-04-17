import { Pressable, StyleSheet, Text, View } from 'react-native';
import type { ScreenKey } from '../types/navigation';
import { colors } from '../theme/colors';

type NavItem = {
  key: ScreenKey;
  label: string;
};

const navItems: NavItem[] = [
  { key: 'home', label: 'Start' },
  { key: 'schedule', label: 'Plan' },
];

type BottomNavProps = {
  activeScreen: ScreenKey;
  onChange: (screen: ScreenKey) => void;
};

export function BottomNav({ activeScreen, onChange }: BottomNavProps) {
  return (
    <View style={styles.bottomNav}>
      {navItems.map(item => {
        const isActive = item.key === activeScreen;

        return (
          <Pressable
            key={item.key}
            onPress={() => onChange(item.key)}
            style={[styles.navButton, isActive && styles.navButtonActive]}>
            <Text style={[styles.navLabel, isActive && styles.navLabelActive]}>
              {item.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  bottomNav: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 16,
  },
  navButton: {
    flex: 1,
    alignItems: 'center',
    borderRadius: 16,
    backgroundColor: colors.surface,
    paddingVertical: 14,
  },
  navButtonActive: {
    backgroundColor: colors.accent,
  },
  navLabel: {
    color: colors.textPrimary,
    fontSize: 15,
    fontWeight: '600',
  },
  navLabelActive: {
    color: colors.background,
  },
});
