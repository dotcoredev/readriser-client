import { Button, Flex, FormProps, Form, Input } from "antd";
import { FieldNamesType } from "antd/es/cascader";
import { AiFillLock, AiOutlineUser } from "react-icons/ai";

export const LoginForm = () => {
	const onFinish: FormProps<FieldNamesType>["onFinish"] = (values) => {
		console.log("Success:", values);
	};

	return (
		<Form name="login" onFinish={onFinish} size="large">
			<Form.Item
				name="email"
				style={{ width: "100%" }}
				rules={[
					{
						type: "email",
						required: true,
						message: "Пожалуйста, введите email имя пользователя!",
					},
				]}
			>
				<Input
					style={{ width: "100%" }}
					prefix={<AiOutlineUser />}
					placeholder="Email"
				/>
			</Form.Item>
			<Form.Item
				name="password"
				rules={[
					{
						required: true,
						message: "Пожалуйста, введите пароль!",
					},
				]}
			>
				<Input
					prefix={<AiFillLock />}
					type="password"
					placeholder="Пароль"
				/>
			</Form.Item>

			<Form.Item>
				<Button block type="primary" htmlType="submit">
					Войти
				</Button>
				<Flex gap="small">
					<a href="">Зарегистрироваться сейчас!</a>
				</Flex>
			</Form.Item>
		</Form>
	);
};
