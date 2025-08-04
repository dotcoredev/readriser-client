"use client";

import { Image, Space, Typography } from "antd";
import styles from "../styles/recomendation-books.module.scss";
import { FC, memo, SyntheticEvent, useState } from "react";
import { BookProps } from "../interfaces/book.interface";
import { useRouter } from "next/navigation";

const BookItemComponent: FC<{ book: BookProps }> = ({ book }) => {
	const [imageWidth, setImageWidth] = useState<number>(0);
	const router = useRouter();

	return (
		<Space
			direction="vertical"
			align="center"
			className={styles.bookItem}
			onClick={() => router.push(book.link)}
			title={book.title}
		>
			<Image
				className={styles.bookCover}
				loading="lazy"
				preview={false}
				alt="book-1"
				//height={300}
				src={book.image}
				onLoad={(data: SyntheticEvent<HTMLDivElement>) => {
					const target = data.target as HTMLImageElement;
					setImageWidth(target.width);
				}}
			/>
			<Typography.Text style={{ width: imageWidth }} ellipsis={true}>
				{book.title}
			</Typography.Text>
		</Space>
	);
};

export const BookItem = memo(BookItemComponent);
