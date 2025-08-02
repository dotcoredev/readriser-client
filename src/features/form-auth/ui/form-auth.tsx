"use client";

import styles from "../styles/form-auth.module.scss";
import { AiOutlineUser } from "react-icons/ai";
import { useProfile } from "@/entities/user/api/profile.api";
import { Loader } from "@/shared/ui/loader";
import dynamic from "next/dynamic";
import { useCallback, useState } from "react";
import { SignupForm } from "../components/signup-form/signup-form";
import { useAppSelector } from "@/shared/hooks/redux/redux.hook";

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
	const { isAuthenticated } = useAppSelector((state) => state.auth);
	const { data: profile, isPending, isEnabled } = useProfile(isAuthenticated);
	const [formType, setFormType] = useState<"signin" | "signup">("signin");

	const changeForm = useCallback((type: "signin" | "signup") => {
		setFormType(type);
	}, []);

	return (
		<section className={styles.wrapper}>
			<div className={styles.iconWrapper} id="avatarUser">
				<AiOutlineUser className={styles.icon} />
			</div>
			<section className={styles.form}>
				{isPending && isEnabled ? (
					<Loader />
				) : profile ? (
					<Profile profile={profile} />
				) : formType === "signup" ? (
					<SignupForm changeForm={changeForm} />
				) : (
					<SigninForm changeForm={changeForm} />
				)}
			</section>
		</section>
	);
};
