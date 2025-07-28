import { BlogPage } from "@/pages/blog";
import { Metadata } from "next";

export function generateMetadata(): Metadata {
	return {
		title: "Blog Page",
		description: "Welcome to the blog section. Stay tuned for updates!",
	};
}

const Page = () => {
	return (
		<div>
			<BlogPage />
		</div>
	);
};

export default Page;
