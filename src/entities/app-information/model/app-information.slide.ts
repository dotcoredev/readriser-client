import { createSlice } from "@reduxjs/toolkit";
interface AppInformationState {
	version: string;
	information: string;
}

const initialState: AppInformationState = {
	version: "1.0.0",
	information: "",
};

const appInformationSlide = createSlice({
	name: "appInformation",
	initialState: initialState,
	reducers: {
		app_information: (state, action) => {
			state.information = action.payload;
		},
	},
});

export const { app_information } = appInformationSlide.actions;

export default appInformationSlide.reducer;
