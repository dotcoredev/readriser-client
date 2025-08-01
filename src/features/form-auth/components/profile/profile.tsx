import { useLogout } from "@/entities/user/api/logout.api";
import { User } from "@/entities/user/model/user.model";
import { Button, Flex, Typography } from "antd";
import Link from "next/link";
import { FC } from "react";

export const Profile: FC<{ profile: User }> = ({ profile }) => {
	const { mutate, isPending } = useLogout();

	const logout = () => {
		if (isPending) return;
		mutate();
	};

	return (
		<div className="wrapper">
			<Flex align="center" gap={3} vertical>
				<Typography.Text>@{profile.login}</Typography.Text>
				<Typography.Text>{profile.email}</Typography.Text>
				<Flex gap={5}>
					<Link href="/dashboard">
						<Button variant="filled" type="primary">
							Перейти в профиль
						</Button>
					</Link>

					<Button
						danger
						variant="filled"
						type="primary"
						onClick={logout}
					>
						Выход
					</Button>
				</Flex>
			</Flex>
		</div>
	);
};
