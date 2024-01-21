import {  createStore } from "redux";
import { cartReducer } from "./Reducer/CartReducer";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import RootReducer from "./Reducer/RootReducer";


const persistConfig = {
    key: 'root',
    storage,
    // Specify the reducers you want to persist
    whitelist: ['cartReducer'], // In this example, we persist the 'user' reducer
  };
  const persistedReducer = persistReducer(persistConfig, RootReducer)
  export const store = createStore(persistedReducer);
  export const persistor = persistStore(store);

  
