"use client";

import Link from "next/link";
import styles from "../styles/sidebar.module.scss";
import { VscBook, VscHome, VscSignOut, VscLibrary } from "react-icons/vsc";

export const Sidebar = () => {
	return (
		<section className={styles.wrapper}>
			<section className={styles.content}>
				<section className={styles.logo}>
					<Link href="/">
						<VscBook className={styles.icon} />
					</Link>
				</section>
				<section className={styles.menu}>
					<Link href="/app">
						<VscHome className={styles.icon} />
					</Link>
					<Link href="/app/library">
						<VscLibrary className={styles.icon} />
					</Link>
				</section>
				<section className={styles.auth}>
					<VscSignOut className={styles.icon} />
				</section>
			</section>
		</section>
	);
};
