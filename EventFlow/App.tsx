import { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppLayout } from './src/components/AppLayout';
import { BottomNav } from './src/components/BottomNav';
import { HomeScreen } from './src/screens/HomeScreen';
import { ScheduleScreen } from './src/screens/ScheduleScreen';
import { UpcomingEventsScreen } from './src/screens/UpcomingEventsScreen';
import type { ScreenKey } from './src/types/navigation';

function App() {
  const [activeScreen, setActiveScreen] = useState<ScreenKey>('home');
  const screen = (() => {
    if (activeScreen === 'home') {
      return <HomeScreen onNavigate={setActiveScreen} />;
    }

    if (activeScreen === 'schedule') {
      return <ScheduleScreen />;
    }

    return <UpcomingEventsScreen onBack={() => setActiveScreen('home')} />;
  })();

  const showBottomNav = activeScreen !== 'upcomingEvents';

  return (
    <SafeAreaProvider>
      <AppLayout
        content={screen}
        bottomNavigation={showBottomNav ? (
          <BottomNav activeScreen={activeScreen} onChange={setActiveScreen} />
        ) : null}
      />
    </SafeAreaProvider>
  );
}

export default App;
