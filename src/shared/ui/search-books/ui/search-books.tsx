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
			placeholder="Поиск по вашей библиотеке"
			onSearch={onSearch}
			size="large"
		/>
	);
};
