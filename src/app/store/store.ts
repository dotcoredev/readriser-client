import { configureStore, StoreEnhancer } from "@reduxjs/toolkit";
import reducers from "./reducers";
import logger from "redux-logger";
import { batchedSubscribe } from "redux-batched-subscribe";
import _ from "lodash";

const debounceNotify = _.debounce((notify) => notify());

export const store = configureStore({
	reducer: reducers,
	devTools: process.env.NODE_ENV !== "production",
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
	enhancers: (getDefaultEnhancers) =>
		getDefaultEnhancers({
			autoBatch: false,
		}).concat(batchedSubscribe(debounceNotify) as StoreEnhancer),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
