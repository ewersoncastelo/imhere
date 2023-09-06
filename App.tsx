import { Fragment } from 'react';
import { StatusBar } from 'react-native';
import { Home } from './src/screens/Home';

export default function App() {
  return (
    <Fragment>
      <StatusBar 
        barStyle="light-content"
        translucent
      />
      <Home />    
    </Fragment>
  );
}