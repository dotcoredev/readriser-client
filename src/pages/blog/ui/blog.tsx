"use client";

import { increment } from "@/entities/home/model/home.slice";
import {
	useAppDispatch,
	useAppSelector,
} from "@/shared/hooks/redux/redux.hook";

export const BlogPage = () => {
	const dispatch = useAppDispatch();
	const { value } = useAppSelector((state) => state.home);

	const handleClick = () => {
		dispatch(increment());
	};

	return (
		<div className="wrapper">
			<h1>Blog Page</h1>
			<p>Welcome to the blog section. Stay tuned for updates!</p>
			<h1 onClick={handleClick}>blog {value}</h1>
		</div>
	);
};
