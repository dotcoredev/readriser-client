import { App } from "antd";

export const useNotification = () => {
	const { notification } = App.useApp();

	const openWarningNotification = (
		message: string,
		description?: string,
		showProgress: boolean = true
	) => {
		notification.info({
			message,
			description,
			showProgress,
			placement: "topRight",
		});
	};

	const openErrorNotification = (
		message: string,
		description?: string,
		showProgress: boolean = true
	) => {
		notification.error({
			message,
			description,
			showProgress,
			placement: "topRight",
		});
	};

	return { openWarningNotification, openErrorNotification };
};
