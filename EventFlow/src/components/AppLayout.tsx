import type { ReactNode } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../theme/colors';

type AppLayoutProps = {
  content: ReactNode;
  bottomNavigation?: ReactNode;
};

export function AppLayout({ content, bottomNavigation }: AppLayoutProps) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />
      <View style={styles.appShell}>
        <View style={styles.content}>{content}</View>
        {bottomNavigation}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  appShell: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 16,
  },
  content: {
    flex: 1,
  },
});
