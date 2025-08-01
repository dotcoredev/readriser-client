import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: "ReadRiser - settings",
		description:
			"ReadRiser is a web application designed to enhance your reading experience.",
	};
}

export default function Page() {
	return (
		<div>
			<h1>Settings Page</h1>
			{/* Other components can be added here */}
		</div>
	);
}
