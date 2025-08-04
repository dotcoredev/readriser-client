"use client";

import { ConfigProvider, App } from "antd";
import { FC, ReactNode, useCallback, useEffect } from "react";
import { antdThemeConfig } from "@/shared/config/antd-theme.config";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "@ant-design/v5-patch-for-react-19";
import "@/shared/styles/reset.scss";

export const AntdProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const setThemeVars = useCallback(() => {
		document.documentElement.style.setProperty(
			"--color-bg-base",
			antdThemeConfig?.token?.colorBgBase || "#efeae5"
		);
		document.documentElement.style.setProperty(
			"--color-primary",
			antdThemeConfig?.token?.colorPrimary || "#fa8c16"
		);
		document.documentElement.style.setProperty(
			"--border-radius",
			`${antdThemeConfig?.token?.borderRadius}px` || "10px"
		);
		document.documentElement.style.setProperty(
			"--box-shadow",
			`${antdThemeConfig?.token?.boxShadow}` ||
				"0 0 40px rgba(0, 0, 0, 0.07)"
		);
		document.documentElement.style.setProperty(
			"--padding",
			`${antdThemeConfig?.token?.padding}px` || "10px"
		);
	}, []);

	useEffect(() => {
		setThemeVars();
	}, [setThemeVars]);

	return (
		<AntdRegistry>
			<ConfigProvider theme={antdThemeConfig}>
				<App>{children}</App>
			</ConfigProvider>
		</AntdRegistry>
	);
};
