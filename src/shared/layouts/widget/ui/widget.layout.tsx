import { Typography } from "antd";
import styles from "../styles/widget-layout.module.scss";
import { FC, PropsWithChildren } from "react";

export const WidgetLayout: FC<
	PropsWithChildren<{ title: string; component?: React.ReactElement }>
> = ({ title, children, component }) => {
	return (
		<section className={styles.wrapper}>
			<section className={styles.header}>
				<Typography.Title level={4}>{title}</Typography.Title>
				{component}
			</section>
			{children}
		</section>
	);
};
