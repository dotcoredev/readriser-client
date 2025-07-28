"use client";

import { increment } from "@/entities/home/model/home.slice";
import {
	useAppDispatch,
	useAppSelector,
} from "@/shared/hooks/redux/redux.hook";

export const HomePage = () => {
	const dispatch = useAppDispatch();
	const { value } = useAppSelector((state) => state.home);

	const handleClick = () => {
		dispatch(increment());
	};

	return (
		<div className="wrapper">
			555555555555
			<h1 onClick={handleClick}>Hello World {value}</h1>
		</div>
	);
};
