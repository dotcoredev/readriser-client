import { HomePage } from "@/pages/home";
import { type Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: "Readriser - home",
		description:
			"Readriser is a web application designed to enhance your reading experience.",
	};
}

const Page = async () => {
	return <HomePage />;
};

export default Page;
