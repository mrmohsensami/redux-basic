import {createStore, applyMiddleware} from 'redux'
import reducers from './reducers'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import mySaga from './saga'

const sagaMiddleware = createSagaMiddleware()

const persistConfig = {
    key: 'root',
    storage,
    //blacklist: ['productState', 'categoryState'],
    //whitelist:['productState'],
  }

const persistedReducer = persistReducer(persistConfig, reducers)

// const store = createStore(reducers);

// export default store;

//export const store = createStore(persistedReducer, applyMiddleware(logger));
//export const store = createStore(persistedReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); //for Redux DevTools

export const store = createStore(persistedReducer,applyMiddleware(sagaMiddleware));
export const persistor = persistStore(store);

// then run the saga
sagaMiddleware.run(mySaga);

