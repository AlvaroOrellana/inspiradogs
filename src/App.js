import React from 'react';
import { Provider } from 'react-redux';
import AppWrapper from '@Components/AppWrapper';
import store from '@Store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <AppWrapper />
    </Provider>
  );
}



export default App;
