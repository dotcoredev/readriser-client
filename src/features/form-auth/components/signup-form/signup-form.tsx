import { useSignup } from "@/entities/user/api/signup.api";
import { SignupFormValues } from "@/entities/user/model/user.model";
import { Button, Flex, FormProps, Form, Input, Typography, Space } from "antd";
import { FC, memo } from "react";
import { AiFillLock, AiOutlineUser } from "react-icons/ai";

export const SignupFormComponent: FC<{
	changeForm: (type: "signin" | "signup") => void;
}> = ({ changeForm }) => {
	const [form] = Form.useForm();
	const { mutate, error, isError, isPending } = useSignup();

	const onFinish: FormProps<SignupFormValues>["onFinish"] = (values) => {
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
		<Form
			form={form}
			name="login"
			onFinish={onFinish}
			size="large"
			variant="underlined"
		>
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
				name="login"
				style={{ width: "100%" }}
				rules={[
					{
						required: true,
						message: "Пожалуйста, введите логин пользователя!",
					},
				]}
			>
				<Input
					style={{ width: "100%" }}
					prefix={<AiOutlineUser />}
					placeholder="login"
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
			<Form.Item
				name="repeat_password"
				rules={[
					{
						required: true,
						min: 6,
						message: "Пожалуйста, повторите пароль!",
					},
				]}
			>
				<Input
					prefix={<AiFillLock />}
					type="password"
					placeholder="Повторите пароль"
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
				<Button block type="primary" htmlType="submit" variant="filled">
					{isPending ? "Подождите..." : "Зарегистрироваться"}
				</Button>
			</Form.Item>

			<Space>
				<Flex gap="small">
					<Button
						color="default"
						variant="link"
						size="small"
						onClick={() => changeForm("signin")}
					>
						Авторизоваться
					</Button>
				</Flex>
			</Space>
		</Form>
	);
};

export const SignupForm = memo(SignupFormComponent);
