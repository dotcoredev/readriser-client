import styles from "../styles/form-auth.module.scss";
import { AiOutlineUser } from "react-icons/ai";
import { useProfile } from "@/entities/user/api/profile.api";
import { Loader } from "@/shared/ui/loader";
import dynamic from "next/dynamic";

const Profile = dynamic(() =>
	import("../components/profile/profile").then((module) => ({
		default: module.Profile,
	}))
);

const SigninForm = dynamic(() =>
	import("../components/signin-form/signin-form").then((module) => ({
		default: module.SigninForm,
	}))
);

export const FormAuth = () => {
	const { data: profile, isPending } = useProfile();

	return (
		<section className={styles.wrapper}>
			<div className={styles.iconWrapper} id="avatarUser">
				<AiOutlineUser className={styles.icon} />
			</div>
			<section className={styles.form}>
				{isPending ? (
					<Loader />
				) : profile ? (
					<Profile profile={profile} />
				) : (
					<SigninForm />
				)}
			</section>
		</section>
	);
};
