import { ReactNode } from "react";
import { ReduxProvider } from "../../../providers/redux/redux";
import styles from "../styles/main-layout.module.scss";
import { Sidebar } from "./sidebar";
import { Header } from "./header";
import { AntdProvider } from "@/app/providers/antd/antd";

export async function ApplicationLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<ReduxProvider>
			<AntdProvider>
				<section className={styles.sidebar}>
					<Sidebar />
				</section>
				<div className={styles.wrapper}>
					<section className={styles.header}>
						<Header />
					</section>
					<section className={styles.content}>{children}</section>
				</div>
			</AntdProvider>
		</ReduxProvider>
	);
}
