import { BookPage } from "@/pages/book";
import { Metadata } from "next";

type GenerateMetadataParams = {
	params: {
		bookId: string;
	};
};

export async function generateMetadata({
	params,
}: GenerateMetadataParams): Promise<Metadata> {
	const { bookId } = await params;
	return {
		title: `ReadRiser - ${bookId} page`,
		description:
			"ReadRiser is a web application designed to enhance your reading experience.",
	};
}

export default function Page() {
	return <BookPage />;
}
