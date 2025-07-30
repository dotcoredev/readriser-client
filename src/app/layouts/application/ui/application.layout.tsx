import { ReactNode, type FC } from "react";
import { ReduxProvider } from "../../../providers/redux/redux.provider";
import styles from "../styles/main-layout.module.scss";
import { Sidebar } from "./sidebar";
import { Header } from "./header";

export const ApplicationLayout: FC<Readonly<{ children: ReactNode }>> = ({
	children,
}) => {
	return (
		<ReduxProvider>
			<div className={styles.sidebar}>
				<Sidebar />
			</div>
			<div className={styles.wrapper}>
				<header className={styles.header}>
					<Header />
				</header>
				<main className={styles.content}>{children}</main>
			</div>
		</ReduxProvider>
	);
};
