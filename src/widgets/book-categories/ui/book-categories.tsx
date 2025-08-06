import { useGetBookCategories } from "@/entities/book/api/get-book-categories";
import { BookCategory } from "@/entities/book/model/book.model";
import { FormCategory } from "@/features/form-category";
import { WidgetLayout } from "@/shared/layouts/widget";
import { Empty } from "@/shared/ui/empty";
import { Loader } from "@/shared/ui/loader";
import { Typography } from "antd";
import { FC } from "react";

export const BookCategories: FC<{ title: string }> = ({ title }) => {
	const { data: categories, isPending } = useGetBookCategories();

	return (
		<WidgetLayout title={title} component={<FormCategory />}>
			{isPending ? (
				<Loader />
			) : categories && categories.length ? (
				categories.map((category: BookCategory) => (
					<Typography.Text
						key={category._id}
						style={{ display: "block" }}
					>
						{category.title}
					</Typography.Text>
				))
			) : (
				<Empty message="Категории не найдены" />
			)}
		</WidgetLayout>
	);
};
