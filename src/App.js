import React from "react";
import './App.css';
import HomePage from "./containers/HomePage";
import storeCreator from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

const { store, persistor } = storeCreator();

function App() {

    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <HomePage/>
            </PersistGate>
        </Provider>
    );
}

export default App;
