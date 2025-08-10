import styles from "../styles/footer.module.scss";

export const Footer = () => {
	return (
		<footer className={styles.wrapper}>
			<p>© {new Date().getFullYear()} ReadRiser.</p>
		</footer>
	);
};
