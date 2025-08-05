"use client";

import { Image, Typography } from "antd";
import styles from "../styles/recomendation-books.module.scss";
import { FC, memo } from "react";
import { BookProps } from "../interfaces/book.interface";
import { useRouter } from "next/navigation";

const BookItemComponent: FC<{ book: BookProps }> = ({ book }) => {
	const router = useRouter();

	return (
		<section
			className={styles.bookItem}
			onClick={() => router.push(book.link)}
			title={book.title}
		>
			<Image
				className={styles.bookCover}
				loading="lazy"
				preview={false}
				alt="book-1"
				height={350}
				src={book.image}
			/>
			<Typography.Link ellipsis={true}>{book.title}</Typography.Link>
		</section>
	);
};

export const BookItem = memo(BookItemComponent);
