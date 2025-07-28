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
				title: "Welcome to the Blog 333",
				description: "Read the latest posts below.",
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
		<div>
			<header>
				<h1>Welcome to the Blog</h1>
				<p>Read the latest posts below.</p>
			</header>
			<main>
				<Suspense fallback={"LOADING........"}>
					<HomePage />
				</Suspense>
			</main>
		</div>
	);
};

export default Page;
