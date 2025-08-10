import { BookCategory } from "@/entities/book/model/book.model";
import { Button, List, Popover, Skeleton, Typography } from "antd";
import { FC } from "react";
import { AiOutlineDelete, AiTwotoneEdit } from "react-icons/ai";

export const ItemCategory: FC<{
	category: BookCategory;
	isPending: boolean;
	onDelete: (categoryId: string) => void;
}> = ({ category, isPending, onDelete }) => {
	return (
		<List.Item
			actions={[
				<Button
					key="edit-book-category"
					type="link"
					icon={
						<Popover content="Редактировать категорию">
							<AiTwotoneEdit />
						</Popover>
					}
				/>,
				<Button
					key="delete-book-category"
					type="link"
					danger
					onClick={() => onDelete(category._id)}
					icon={
						<Popover content="Удалить категорию">
							<AiOutlineDelete />
						</Popover>
					}
				/>,
			]}
		>
			<Skeleton avatar title={false} loading={isPending} active>
				<List.Item.Meta
					//avatar={<Avatar src={category?.cover?.url ?? ""} />}
					title={
						<Typography.Text style={{ margin: 0 }}>
							{category.title}
						</Typography.Text>
					}
					//description=""
				/>
			</Skeleton>
		</List.Item>
	);
};
