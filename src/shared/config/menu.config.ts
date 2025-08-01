import { ComponentType } from "react";
import { VscHome, VscLibrary } from "react-icons/vsc";

export interface MenuItem {
	href: string;
	icon: ComponentType<{ className?: string }>;
}

export const menuList: MenuItem[] = [
	{
		href: "/dashboard",
		icon: VscHome,
	},
	{
		href: "/dashboard/library",
		icon: VscLibrary,
	},
];
