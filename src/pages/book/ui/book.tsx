"use client";

import { useParams } from "next/navigation";

export const BookPage = () => {
	const params = useParams<{ bookId?: string }>() ?? {};
	return (
		<div>
			<h1>Book Page</h1>
			<h2>{params?.bookId}</h2>
		</div>
	);
};
