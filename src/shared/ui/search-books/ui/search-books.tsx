"use client";

import { Input } from "antd";
const { Search } = Input;

export const SearchBooks = () => {
	const onSearch = (value: string) => {
		console.log(value);
	};
	return (
		<Search
			placeholder="input search text"
			onSearch={onSearch}
			size="middle"
		/>
	);
};
