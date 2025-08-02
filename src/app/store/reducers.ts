import { combineReducers } from "@reduxjs/toolkit";
import appInformationReducer from "@/entities/app-information/model/app-information.slide";
import authReducer from "@/entities/user/model/auth.slice";

export default combineReducers({
	appInformation: appInformationReducer,
	auth: authReducer,
});
