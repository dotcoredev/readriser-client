import { type ThemeConfig } from "antd";

export const antdThemeConfig: ThemeConfig = {
	token: {
		sizeStep: 3,
		wireframe: false,
		borderRadius: 10,
		sizeUnit: 3,
		fontSize: 16,
		colorPrimary: "#f5680b",
		colorInfo: "#fa8c16",
		colorSuccess: "#fa8c16",
		colorWarning: "#fa541c",
		colorError: "#f5222d",
		colorTextBase: "#000000",
		colorBgBase: "#efeae5",
		colorLink: "#a5531c",
		boxShadow: "0 0 40px rgba(0, 0, 0, 0.07)",
		padding: 10,
	},
	components: {
		Button: {
			algorithm: true,
		},
	},
};
