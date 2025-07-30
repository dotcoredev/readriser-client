// @jsxImportSource react
import { HomePage } from "@/pages/home";
import { type Metadata } from "next";
import { Suspense } from "react";

async function fetchInitialData(): Promise<{
	title: string;
	description: string;
}> {
	return new Promise((res) => {
		setTimeout(() => {
			res({
				title: "ReadRiser - application",
				description:
					"ReadRiser is a web application designed to enhance your reading experience.",
			});
		}, 50);
	});
}

export async function generateMetadata(): Promise<Metadata> {
	const data = await fetchInitialData();
	return {
		title: data.title,
		description: data.description,
	};
}

const Page = async () => {
	return (
		<Suspense fallback={"LOADING........"}>
			<HomePage />
			<HomePage />
			<HomePage />
			<HomePage />
			<HomePage />
			<HomePage />
			<HomePage />
			<HomePage />
			<HomePage />
			<HomePage />
			<HomePage />
			<HomePage />
			<HomePage />
			<HomePage />
			<HomePage />
			<HomePage />
			<HomePage />
			<HomePage />
			<HomePage />
			<HomePage />
			<HomePage />
			<HomePage />
		</Suspense>
	);
};

export default Page;
