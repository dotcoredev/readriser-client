import { ReactNode } from "react";

export function BlogLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<div>
			<section>section blog</section>
			{children}
		</div>
	);
}
