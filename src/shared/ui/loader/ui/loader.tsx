import { Spin } from "antd";
import { AiOutlineLoading } from "react-icons/ai";
import styles from "../styles/loader.module.scss";
import { FC } from "react";

export const Loader: FC<{ status: boolean }> = ({ status }) => {
	return (
		<div className={`${styles.wrapper} ${status ? styles.loaded : ""}`}>
			<Spin indicator={<AiOutlineLoading style={{ fontSize: 48 }} />} />
		</div>
	);
};
