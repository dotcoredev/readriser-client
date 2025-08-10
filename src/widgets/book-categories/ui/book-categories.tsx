import { useGetBookCategories } from "@/entities/book/api/get-book-categories";
import { BookCategory } from "@/entities/book/model/book.model";
import { FormCategory } from "@/features/form-category";
import { WidgetLayout } from "@/shared/layouts/widget";
import { Empty } from "@/shared/ui/empty";
import { Loader } from "@/shared/ui/loader";
import { List } from "antd";
import { FC } from "react";
import { ItemCategory } from "../components/item-category";
import { useDeleteBookCategory } from "@/entities/book/api/delete-book-category";

export const BookCategories: FC<{ title: string }> = ({ title }) => {
	const { data: categories, isPending } = useGetBookCategories();
	const { mutate: deleteBookCategory } = useDeleteBookCategory();

	const handleDeleteCategory = (categoryId: string) => {
		deleteBookCategory({ category_id: categoryId });
	};

	return (
		<WidgetLayout title={title} component={<FormCategory />}>
			{isPending ? (
				<Loader />
			) : categories && categories.length ? (
				<List
					className="demo-loadmore-list"
					loading={isPending}
					itemLayout="horizontal"
					//loadMore={loadMore}
					dataSource={categories}
					renderItem={(category: BookCategory) => (
						<ItemCategory
							isPending={isPending}
							key={category._id}
							category={category}
							onDelete={() => handleDeleteCategory(category._id)}
						/>
					)}
					//split={false}
				/>
			) : (
				<Empty message="Категории не найдены" />
			)}
		</WidgetLayout>
	);
};
