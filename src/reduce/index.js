import { combineReducers } from 'redux'

import storage from 'redux-persist/lib/storage'
import autoMergeLeve2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import { persistReducer } from 'redux-persist'

import item from './item'

const combinPersistConfig = {
    key: 'root',
    storage: storage,
    blacklist: ['item']
}

const itemPersistConfig = {
    key: 'item',
    storage: storage,
    stateReconciler: autoMergeLeve2
}

const rootReducer = combineReducers({
    item: persistReducer(itemPersistConfig, item)
})

export default persistReducer(combinPersistConfig, rootReducer)

