import { MenuItem, menuList } from "@/shared/config/menu.config";
import { pathnameRegexp } from "@/shared/utils/pathname/pathnema";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/sidebar.module.scss";
import { Fragment } from "react";

export const MenuList = () => {
	const pathname = usePathname() as string;

	return (
		<Fragment>
			{menuList.map(({ href, icon: Icon }: MenuItem) => (
				<Link
					key={href}
					href={href}
					className={
						pathnameRegexp(href, pathname) ? styles.active : ""
					}
				>
					<Icon className={styles.icon} />
				</Link>
			))}
		</Fragment>
	);
};
