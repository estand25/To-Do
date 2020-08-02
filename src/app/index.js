import React from 'react';
import { DisplayAddItem, DisplayItemList } from '../components'

import { Provider } from 'react-redux'
import { store, persistor } from '../store'
import { PersistGate } from 'redux-persist/integration/react'

import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <DisplayAddItem />
                <DisplayItemList />
            </PersistGate>
        </Provider>
    )
}

export default App
