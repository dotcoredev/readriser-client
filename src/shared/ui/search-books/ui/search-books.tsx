"use client";

import { Input } from "antd";
const { Search } = Input;

export const SearchBooks = () => {
	const onSearch = (value: string) => {
		console.log(value);
	};
	return (
		<Search
			variant="filled"
			placeholder="Поиск по названию книги или автора"
			onSearch={onSearch}
			size="large"
		/>
	);
};
