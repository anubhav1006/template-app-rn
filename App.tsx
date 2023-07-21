import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import LoadingScreen from './src/screens/LoadingScreen';
import TemplateDrawer from './src/navigation';

let persistor = persistStore(store);

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<LoadingScreen/>} persistor={persistor}>
        <NavigationContainer>
          <TemplateDrawer/>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}