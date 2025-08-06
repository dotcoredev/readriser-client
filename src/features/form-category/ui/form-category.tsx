import { Button, Popover } from "antd";
import { Fragment, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FormCategoryModal } from "../components/form-category";

export const FormCategory = () => {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	return (
		<Fragment>
			<FormCategoryModal
				open={isModalOpen}
				onClose={() => setIsModalOpen(false)}
			/>
			<Popover content="Добавить категорию">
				<Button
					type="primary"
					icon={<AiOutlinePlus size={20} />}
					size="middle"
					onClick={() => setIsModalOpen(true)}
				/>
			</Popover>
		</Fragment>
	);
};
