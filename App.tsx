import React from 'react';
import {Navigation} from './src/navigation';
import {ReduxProvider} from '@store/store';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <ReduxProvider>
        <Navigation />
      </ReduxProvider>
    </SafeAreaProvider>
  );
};

export default App;
