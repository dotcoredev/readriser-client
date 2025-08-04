import { BookPage } from "@/pages/book";
import { Metadata } from "next";

type Props = {
	params: {
		bookId: string;
	};
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	return {
		title: `ReadRiser - ${params.bookId} page`,
		description:
			"ReadRiser is a web application designed to enhance your reading experience.",
	};
}

export default function Page() {
	return <BookPage />;
}
