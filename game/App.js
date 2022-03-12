import React, {useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { RootNavigator } from './navigation/RootNavigator';
import { AuthenticatedUserProvider } from './providers';
import LogRocket from '@logrocket/react-native';

const App = () => {
    useEffect(() => {
      LogRocket.init('uxojml/game');
  }, []);
  return (
    <AuthenticatedUserProvider>
      <SafeAreaProvider>
        <RootNavigator />
      </SafeAreaProvider>
    </AuthenticatedUserProvider>
  );
};

export default App;
