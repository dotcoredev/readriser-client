"use client";

import { FC } from "react";
import styles from "../styles/loader.module.scss";
import dynamic from "next/dynamic";

const PuffLoader = dynamic(() => import("react-spinners/PuffLoader"), {
	ssr: false,
});

export const Loader: FC = () => {
	return (
		<div className={styles.wrapper}>
			<PuffLoader color="#686868" size={60} />
		</div>
	);
};
