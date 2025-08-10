import { ReactNode, type FC } from "react";
import styles from "../styles/main-layout.module.scss";
import { Sidebar } from "./sidebar";
import { Header } from "./header";
import { Layout } from "antd";
import { Footer } from "./footer";

export const ApplicationLayout: FC<Readonly<{ children: ReactNode }>> = ({
	children,
}) => {
	return (
		<Layout>
			<div className={styles.sidebar}>
				<Sidebar />
			</div>
			<Layout className={styles.wrapper}>
				<header className={styles.header}>
					<Header />
				</header>
				<Layout className={styles.content}>{children}</Layout>
				<Footer />
			</Layout>
		</Layout>
	);
};
