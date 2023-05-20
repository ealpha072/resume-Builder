import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { userSlice } from "./userSlice";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'

//persist configs keys
const persistConfigs = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfigs, userSlice.reducer)

//creating a store
export const store = configureStore({
    reducer:{
        user:persistedReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
})

export const persistor = persistStore(store)