import { configureStore, StoreEnhancer } from "@reduxjs/toolkit";
import reducers from "./reducers";
import logger from "redux-logger";
import { batchedSubscribe } from "redux-batched-subscribe";
import _ from "lodash";
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const debounceNotify = _.debounce((notify) => notify());

const persistConfig = {
	key: "root",
	storage,
	whitelist: ["auth"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
	reducer: persistedReducer,
	devTools: process.env.NODE_ENV !== "production",
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [
					FLUSH,
					REHYDRATE,
					PAUSE,
					PERSIST,
					PURGE,
					REGISTER,
				],
			},
		}).concat(logger),
	enhancers: (getDefaultEnhancers) =>
		getDefaultEnhancers({
			autoBatch: false,
		}).concat(batchedSubscribe(debounceNotify) as StoreEnhancer),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
