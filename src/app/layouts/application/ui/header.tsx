import { SearchBooks } from "@/shared/ui/search-books";
import styles from "../styles/header.module.scss";

export const Header = () => {
	return (
		<section className={styles.wrapper}>
			<section className={styles.content}>
				<section className={styles.search}>
					<SearchBooks />
				</section>
				<section className={styles.profile}>
					<h5>profile</h5>
				</section>
			</section>
		</section>
	);
};
