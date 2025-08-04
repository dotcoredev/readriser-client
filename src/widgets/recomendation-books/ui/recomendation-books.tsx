import { Typography } from "antd";
import styles from "../styles/recomendation-books.module.scss";

export const RecomendationBooks = () => {
	return (
		<section className={styles.wrapper}>
			<Typography.Title level={4}>Рекомендуемые книги</Typography.Title>
		</section>
	);
};
