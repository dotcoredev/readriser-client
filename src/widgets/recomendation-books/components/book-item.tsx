import { Image, Space, Typography } from "antd";
import styles from "../styles/recomendation-books.module.scss";
import Link from "next/link";
import { FC, memo, SyntheticEvent, useState } from "react";
import { BookProps } from "../interfaces/book.interface";

const BookItemComponent: FC<{ book: BookProps }> = ({ book }) => {
	const [imageWidth, setImageWidth] = useState<number>(0);

	return (
		<Link href={book.link}>
			<Space direction="vertical" align="center">
				<Image
					className={styles.bookItem}
					loading="lazy"
					preview={false}
					alt="book-1"
					height={300}
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
		</Link>
	);
};

export const BookItem = memo(BookItemComponent);
