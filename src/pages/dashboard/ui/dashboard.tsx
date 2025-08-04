"use client";
import { RecomendationBooks } from "@/widgets/recomendation-books";
import styles from "../styles/dashboard.module.scss";

export const DashboardPage = () => {
	return (
		<div className={styles.wrapper}>
			<RecomendationBooks title="Рекомендуемые книги из библиотеки" />
			<RecomendationBooks title="Рекомендуемые книги из библиотеки" />
			<RecomendationBooks title="Рекомендуемые книги из библиотеки" />
			<RecomendationBooks title="Рекомендуемые книги из библиотеки" />
		</div>
	);
};
