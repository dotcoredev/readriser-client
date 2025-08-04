// @jsxImportSource react
import { DashboardPage } from "@/pages/dashboard";
import { type Metadata } from "next";
import { Suspense } from "react";

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: "ReadRiser - dashboard",
		description:
			"ReadRiser is a web application designed to enhance your reading experience.",
	};
}

const Page = async () => {
	return (
		<Suspense fallback={"LOADING........"}>
			<DashboardPage />
			<DashboardPage />
			<DashboardPage />
			<DashboardPage />
			<DashboardPage />
			<DashboardPage />
			<DashboardPage />
			<DashboardPage />
			<DashboardPage />
			<DashboardPage />
			<DashboardPage />
			<DashboardPage />
			<DashboardPage />
			<DashboardPage />
			<DashboardPage />
			<DashboardPage />
			<DashboardPage />
			<DashboardPage />
			<DashboardPage />
			<DashboardPage />
			<DashboardPage />
			<DashboardPage />
			<DashboardPage />
			<DashboardPage />
		</Suspense>
	);
};

export default Page;
