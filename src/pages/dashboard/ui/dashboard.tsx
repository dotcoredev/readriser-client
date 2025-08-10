"use client";
import { RecomendationBooks } from "@/widgets/recomendation-books";
import styles from "../styles/dashboard.module.scss";
import { BookCategories } from "@/widgets/book-categories";
import { Library } from "@/widgets/library";

export const DashboardPage = () => {
	return (
		<div className={styles.wrapper}>
			<RecomendationBooks title="Рекомендуемые книги из библиотеки" />
			<section className={styles.categoriesAndInformation}>
				<section className={styles.left}>
					<Library title="Библиотека" />
				</section>
				<section className={styles.right}>
					<BookCategories title="Категории книг" />
				</section>
			</section>
		</div>
	);
};
