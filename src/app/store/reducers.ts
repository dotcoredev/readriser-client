import { combineReducers } from "@reduxjs/toolkit";
import appInformationReducer from "@/entities/app-information/model/app-information.slide";

export default combineReducers({
	appInformation: appInformationReducer,
});
