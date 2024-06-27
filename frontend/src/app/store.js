import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import counterReducer from "../features/counter/counterSlice";

/* Config object for persist store */
const persistConfig = {
  key: "root",
  storage,
};

/* Combining Both Reducer */
const rootReducer = combineReducers({
  counter: counterReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  // devTools: process.env.NODE_ENV !== "production",
  // middleware: [thunk],
});

export const persistor = persistStore(store);
