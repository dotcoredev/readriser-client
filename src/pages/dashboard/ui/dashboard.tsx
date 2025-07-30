"use client";

import { increment } from "@/entities/home/model/home.slice";
import {
	useAppDispatch,
	useAppSelector,
} from "@/shared/hooks/redux/redux.hook";
import styles from "../styles/dashboard.module.scss";

export const DashboardPage = () => {
	const dispatch = useAppDispatch();
	const { value } = useAppSelector((state) => state.home);

	const handleClick = () => {
		dispatch(increment());
	};

	return (
		<div className={styles.wrapper}>
			<h1 onClick={handleClick}>Hello World {value}</h1>
			<p>
				This is a simple counter example. This is a simple counter
				example. This is a simple counter example. This is a simple
				counter example. This is a simple counter example. This is a
				simple counter example. This is a simple counter example. This
				is a simple counter example. This is a simple counter example.
				This is a simple counter example. This is a simple counter
				example. This is a simple counter example. This is a simple
				counter example. This is a simple counter example. This is a
				simple counter example. This is a simple counter example. This
				is a simple counter example. This is a simple counter example.
				This is a simple counter example. This is a simple counter
				example. This is a simple counter example. This is a simple
				counter example. This is a simple counter example. This is a
				simple counter example. This is a simple counter example. This
				is a simple counter example. This is a simple counter example.
				This is a simple counter example. This is a simple counter
				example. This is a simple counter example. This is a simple
				counter example.{" "}
			</p>
		</div>
	);
};
