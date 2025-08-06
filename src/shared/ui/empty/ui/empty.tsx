import { Empty, Typography } from "antd";
import { FC } from "react";

export const EmptyUI: FC<{ message: string }> = ({ message }) => {
	return (
		<Empty
			image="/planet.png"
			styles={{ image: { height: 60 } }}
			description={<Typography.Text>{message}</Typography.Text>}
		/>
	);
};
