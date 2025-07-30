import React, { FC, ReactNode } from "react";
import { Geist_Mono } from "next/font/google";

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const MainLayout: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<html lang="ru">
			<body className={`${geistMono.variable}`}>{children}</body>
		</html>
	);
};
