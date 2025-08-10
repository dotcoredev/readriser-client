import { WidgetLayout } from "@/shared/layouts/widget";
import { FC } from "react";

export const Library: FC<{ title: string }> = ({ title }) => {
	return (
		<WidgetLayout title={title}>
			<h1>{title}</h1>
			<p>Добро пожаловать в раздел библиотеки нашего приложения!</p>
		</WidgetLayout>
	);
};
