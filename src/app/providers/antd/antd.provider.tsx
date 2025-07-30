"use client";

import { ConfigProvider } from "antd";
import { FC, ReactNode } from "react";
import { antdThemeConfig } from "@/shared/config/antd-theme.config";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "@ant-design/v5-patch-for-react-19";
import "@/shared/styles/reset.scss";

export const AntdProvider: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<AntdRegistry>
			<ConfigProvider theme={antdThemeConfig}>{children}</ConfigProvider>
		</AntdRegistry>
	);
};
