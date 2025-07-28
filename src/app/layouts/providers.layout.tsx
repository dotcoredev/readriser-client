import { Geist, Geist_Mono } from "next/font/google";
import { ReactNode } from "react";
import { ReduxProvider } from "../providers/redux/redux";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export function ProvidersLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang="ru">
			<body className={`${geistSans.variable} ${geistMono.variable}`}>
				<ReduxProvider>
					<section>section</section>
					{children}
				</ReduxProvider>
			</body>
		</html>
	);
}
