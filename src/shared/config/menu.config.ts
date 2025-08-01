import { ComponentType } from "react";
import { VscHome, VscLibrary, VscSettings } from "react-icons/vsc";

export interface MenuItem {
	href: string;
	icon: ComponentType<{ className?: string }>;
	title: string;
}

export const menuList: MenuItem[] = [
	{
		href: "/dashboard",
		icon: VscHome,
		title: "Главная",
	},
	{
		href: "/dashboard/library",
		icon: VscLibrary,
		title: "Библиотека",
	},
	{
		href: "/dashboard/settings",
		icon: VscSettings,
		title: "Настройки",
	},
];
