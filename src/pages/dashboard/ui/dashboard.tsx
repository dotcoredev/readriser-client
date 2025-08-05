"use client";
import { RecomendationBooks } from "@/widgets/recomendation-books";
import styles from "../styles/dashboard.module.scss";
import { BookCategories } from "@/widgets/book-categories";

export const DashboardPage = () => {
	return (
		<div className={styles.wrapper}>
			<RecomendationBooks title="Рекомендуемые книги из библиотеки" />
			<BookCategories title="Категории книг" />
		</div>
	);
};
