import { Typography } from "antd";
import styles from "../styles/recomendation-books.module.scss";
import { FC } from "react";
import { BookItem } from "../components/book-item";

export const RecomendationBooks: FC<{ title?: string }> = ({
	title = "Рекомендуемые книги",
}) => {
	return (
		<section className={styles.wrapper}>
			<Typography.Title level={4}>{title}</Typography.Title>

			<section className={styles.booksList}>
				<BookItem
					book={{
						title: "Книга 1: Заголовок Заголовок Заголовок Заголовок",
						image: "/images/book-1.jpg",
						link: "/dashboard/library/book/book-1",
					}}
				/>
				<BookItem
					book={{
						title: "Книга 1: Заголовок Заголовок Заголовок Заголовок",
						image: "/images/book-2.webp",
						link: "/dashboard/library/book/book-1",
					}}
				/>
				<BookItem
					book={{
						title: "Книга 1: Заголовок Заголовок Заголовок Заголовок",
						image: "/images/book-3.webp",
						link: "/dashboard/library/book/book-1",
					}}
				/>
				<BookItem
					book={{
						title: "Книга 1: Заголовок Заголовок Заголовок Заголовок",
						image: "/images/book-1.jpg",
						link: "/dashboard/library/book/book-1",
					}}
				/>
				<BookItem
					book={{
						title: "Книга 1: Заголовок Заголовок Заголовок Заголовок",
						image: "/images/book-2.webp",
						link: "/dashboard/library/book/book-1",
					}}
				/>
			</section>
		</section>
	);
};
