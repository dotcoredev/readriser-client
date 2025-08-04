import { Typography, Flex } from "antd";
import styles from "../styles/recomendation-books.module.scss";
import { FC } from "react";
import { BookItem } from "../components/book-item";

export const RecomendationBooks: FC<{ title?: string }> = ({
	title = "Рекомендуемые книги",
}) => {
	return (
		<section className={styles.wrapper}>
			<Typography.Title level={4}>{title}</Typography.Title>
			<Flex gap={20} wrap="wrap">
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
						image: "/images/book-4.webp",
						link: "/dashboard/library/book/book-1",
					}}
				/>
				<BookItem
					book={{
						title: "Книга 1: Заголовок Заголовок Заголовок Заголовок",
						image: "/images/book-5.jpg",
						link: "/dashboard/library/book/book-1",
					}}
				/>
				<BookItem
					book={{
						title: "Книга 1: Заголовок Заголовок Заголовок Заголовок",
						image: "/images/book-6.webp",
						link: "/dashboard/library/book/book-1",
					}}
				/>
			</Flex>
		</section>
	);
};
