"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import styles from "../styles/home.module.scss";
import { Canvas } from "@/shared/lib/canvas/canvas";
import { FormAuth } from "@/features/form-auth";

export const HomePage = () => {
	const canvasRef = useRef<HTMLDivElement>(null);
	const canvas = useRef<Canvas>(new Canvas());
	const [canvasActive, setCanvasActive] = useState<boolean>(false);

	const canvasCallback = useCallback(async (element: HTMLDivElement) => {
		await canvas.current.init(element);
		setCanvasActive(true);
	}, []);

	useEffect(() => {
		if (!canvasRef.current) return;
		canvasCallback(canvasRef.current);
	}, [canvasCallback]);

	return (
		<div className={styles.wrapper}>
			<div
				className={`${styles.canvas} ${
					canvasActive ? styles.canvasActive : ""
				}`}
				ref={canvasRef}
			></div>
			<div className={styles.content}>
				<FormAuth />
			</div>
		</div>
	);
};
