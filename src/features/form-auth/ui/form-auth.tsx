import styles from "../styles/form-auth.module.scss";
import { AiOutlineUser } from "react-icons/ai";
import { LoginForm } from "../components/login-form/login-form";

export const FormAuth = () => {
	return (
		<section className={styles.wrapper}>
			<div className={styles.iconWrapper}>
				<AiOutlineUser className={styles.icon} />
			</div>
			<section className={styles.form}>
				<LoginForm />
			</section>
		</section>
	);
};
