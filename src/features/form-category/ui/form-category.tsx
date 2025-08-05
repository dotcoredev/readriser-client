import { Button, Popover } from "antd";
import { Fragment } from "react";
import { AiOutlinePlus } from "react-icons/ai";

export const FormCategory = () => {
	return (
		<Fragment>
			<Popover content="Добавить категорию">
				<Button
					type="primary"
					icon={<AiOutlinePlus size={20} />}
					size="middle"
				/>
			</Popover>
		</Fragment>
	);
};
