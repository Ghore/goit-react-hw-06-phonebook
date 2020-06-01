import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import contactReducer from "./contactReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, contactReducer);

export const store = configureStore({
  reducer: persistedReducer,

  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export const persistor = persistStore(store);
