import { HomePage } from "@/pages/home";
import { type Metadata } from "next";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { checkProfileRequest } from "@/entities/user/api/profile.api";

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: "Readriser - home",
		description:
			"Readriser is a web application designed to enhance your reading experience.",
	};
}

const Page = async () => {
	const cookieStore = await cookies();
	const token = cookieStore.get("accessToken")?.value;

	if (token) {
		const isValid = await checkProfileRequest(token);
		if (isValid) {
			return redirect("/dashboard");
		}
	}

	return <HomePage />;
};

export default Page;
