import { useSignin } from "@/entities/user/api/signin.api";
import { SigninFormValues } from "@/entities/user/model/user.model";
import { Button, Flex, FormProps, Form, Input, Typography, Space } from "antd";
import { AiFillLock, AiOutlineUser } from "react-icons/ai";

export const SigninForm = () => {
	const [form] = Form.useForm();
	const { mutate, error, isError, isPending } = useSignin();

	const onFinish: FormProps<SigninFormValues>["onFinish"] = (values) => {
		if (isPending) return;
		mutate(values, {
			onError: (error: Error) => {
				if (Array.isArray(error)) {
					form.setFields(error);
				}
			},
		});
	};

	return (
		<Form form={form} name="login" onFinish={onFinish} size="large">
			<Form.Item
				name="email"
				style={{ width: "100%" }}
				rules={[
					{
						type: "email",
						required: true,
						message: "Пожалуйста, введите email пользователя!",
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
						min: 6,
						message:
							"Пожалуйста, введите пароль! Пароль должен быть не менее 6 символов.",
					},
				]}
			>
				<Input
					prefix={<AiFillLock />}
					type="password"
					placeholder="Пароль"
				/>
			</Form.Item>

			{isError && (
				<Space>
					<Typography.Text type="danger">
						{error?.message}
					</Typography.Text>
				</Space>
			)}

			<Form.Item>
				<Button block type="primary" htmlType="submit">
					{isPending ? "Вход..." : "Войти"}
				</Button>
			</Form.Item>

			<Space>
				<Flex gap="small">
					<span>Зарегистрироваться сейчас!</span>
				</Flex>
			</Space>
		</Form>
	);
};
