"use client";

import { useCreateBookCategory } from "@/entities/book/api/create-book-category";
import { BookCategoryFormValues } from "@/entities/book/model/book.model";
import { Button, Form, FormProps, Input, Modal, Space, Typography } from "antd";
import { FC, useEffect } from "react";
import { AiOutlineFolder } from "react-icons/ai";

export const FormCategoryModal: FC<{ open: boolean; onClose: () => void }> = ({
	open,
	onClose,
}) => {
	const [form] = Form.useForm();
	const { mutate, error, isError, isPending } = useCreateBookCategory();

	const onFinish: FormProps<BookCategoryFormValues>["onFinish"] = (
		values
	) => {
		console.log("Form submitted with values:", error);
		mutate(values, {
			onSuccess: () => form.resetFields(),
			onError: (error: Error) => {
				if (Array.isArray(error)) {
					form.setFields(error);
				}
			},
		});
	};

	useEffect(() => {
		form.resetFields();
	}, [form, open]);

	return (
		<Modal
			open={open}
			title="Добавить категорию"
			footer={null}
			onCancel={onClose}
			zIndex={12000}
			forceRender
		>
			<Form
				form={form}
				name="createBookCategory"
				onFinish={onFinish}
				size="large"
				variant="underlined"
				autoFocus={true}
			>
				<Form.Item
					name="title"
					style={{ width: "100%" }}
					rules={[
						{
							required: true,
							message: "Пожалуйста, введите название категории",
						},
					]}
				>
					<Input
						autoFocus
						style={{ width: "100%" }}
						prefix={<AiOutlineFolder />}
						placeholder="Название категории"
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
					<Button
						block
						type="primary"
						htmlType="submit"
						variant="filled"
					>
						{isPending ? "Создание..." : "Создать категорию"}
					</Button>
				</Form.Item>
			</Form>
		</Modal>
	);
};
