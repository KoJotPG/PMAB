import { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppLayout } from './src/components/AppLayout';
import { BottomNav } from './src/components/BottomNav';
import { HomeScreen } from './src/screens/HomeScreen';
import { ScheduleScreen } from './src/screens/ScheduleScreen';
import type { ScreenKey } from './src/types/navigation';

function App() {
  const [activeScreen, setActiveScreen] = useState<ScreenKey>('home');
  const screen =
    activeScreen === 'home' ? <HomeScreen /> : <ScheduleScreen />;

  return (
    <SafeAreaProvider>
      <AppLayout
        content={screen}
        bottomNavigation={
          <BottomNav activeScreen={activeScreen} onChange={setActiveScreen} />
        }
      />
    </SafeAreaProvider>
  );
}

export default App;
