import { FormCategory } from "@/features/form-category";
import { WidgetLayout } from "@/shared/layouts/widget";
import { FC } from "react";

export const BookCategories: FC<{ title: string }> = ({ title }) => {
	return (
		<WidgetLayout title={title} component={<FormCategory />}>
			BookCategories
		</WidgetLayout>
	);
};
