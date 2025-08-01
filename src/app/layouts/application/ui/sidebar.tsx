"use client";

import Link from "next/link";
import styles from "../styles/sidebar.module.scss";
import { VscBook, VscSignOut } from "react-icons/vsc";
import { useLogout } from "@/entities/user/api/logout.api";
import { MenuList } from "../components/menu-list";

export const Sidebar = () => {
	const { mutate, isPending } = useLogout();

	const logout = () => {
		if (isPending) return;
		mutate();
	};

	return (
		<nav className={styles.wrapper}>
			<section className={styles.content}>
				<section className={styles.logo}>
					<Link href="/dashboard">
						<VscBook className={styles.icon} />
					</Link>
				</section>
				<section className={styles.menu}>
					<MenuList />
				</section>
				<section className={styles.auth} onClick={logout}>
					<VscSignOut className={styles.icon} />
				</section>
			</section>
		</nav>
	);
};
