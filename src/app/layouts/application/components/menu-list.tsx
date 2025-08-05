"use client";

import { MenuItem, menuList } from "@/shared/config/menu.config";
import { pathnameRegexp } from "@/shared/utils/pathname/pathnema";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/sidebar.module.scss";
import { Fragment } from "react";
import { Tooltip } from "antd";

export const MenuList = () => {
	const pathname = usePathname() as string;
	console.log("Current pathname:", pathname);

	return (
		<Fragment>
			{menuList.map(({ href, icon: Icon, title }: MenuItem) => (
				<Tooltip
					title={title}
					key={title}
					placement="right"
					zIndex={3000}
				>
					<Link
						key={href}
						href={href}
						prefetch={true}
						className={
							pathnameRegexp(href, pathname) ? styles.active : ""
						}
					>
						<Icon className={styles.icon} />
					</Link>
				</Tooltip>
			))}
		</Fragment>
	);
};
