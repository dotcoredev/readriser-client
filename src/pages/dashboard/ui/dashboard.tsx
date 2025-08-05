"use client";
import { RecomendationBooks } from "@/widgets/recomendation-books";
import styles from "../styles/dashboard.module.scss";
import { BookCategories } from "@/widgets/book-categories";

export const DashboardPage = () => {
	return (
		<div className={styles.wrapper}>
			<RecomendationBooks title="Рекомендуемые книги из библиотеки" />
			<section className={styles.categoriesAndInformation}>
				<section className={styles.left}>
					<RecomendationBooks title="Рекомендуемые книги из библиотеки" />
					<BookCategories title="Категории книг 1" />
					<BookCategories title="Категории книг 2" />
				</section>
				<section className={styles.right}>
					<BookCategories title="Категории книг 1" />
					<BookCategories title="Категории книг 2" />
					<BookCategories title="Категории книг 3" />
					<BookCategories title="Категории книг 4" />
					<BookCategories title="Категории книг 4" />
					<BookCategories title="Категории книг 4" />
					<BookCategories title="Категории книг 4" />
				</section>
			</section>
			<BookCategories title="Категории книг" />
		</div>
	);
};
