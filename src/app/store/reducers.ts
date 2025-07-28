import { combineReducers } from "@reduxjs/toolkit";
import homeReducer from "@/entities/home/model/home.slice";

export default combineReducers({
	home: homeReducer,
});
