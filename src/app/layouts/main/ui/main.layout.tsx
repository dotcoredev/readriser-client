import React, { FC, ReactNode } from "react";
import { Geist_Mono } from "next/font/google";
import { AntdProvider } from "@/app/providers/antd/antd.provider";
import { QCProvider } from "@/app/providers/queryClient/query-client.provider";
import { ReduxProvider } from "@/app/providers/redux/redux.provider";

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const MainLayout: FC<Readonly<{ children: ReactNode }>> = ({
	children,
}) => {
	return (
		<html lang="ru">
			<body className={`${geistMono.variable}`}>
				<ReduxProvider>
					<QCProvider>
						<AntdProvider>{children}</AntdProvider>
					</QCProvider>
				</ReduxProvider>
			</body>
		</html>
	);
};
