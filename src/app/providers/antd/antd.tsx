"use client";

import { ConfigProvider } from "antd";
import { FC, ReactNode } from "react";
import "@ant-design/v5-patch-for-react-19";
import "@/shared/styles/reset.scss";

export const AntdProvider: FC<{ children: ReactNode }> = ({ children }) => {
	return <ConfigProvider>{children}</ConfigProvider>;
};
