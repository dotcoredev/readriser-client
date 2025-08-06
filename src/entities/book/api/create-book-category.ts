import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axios } from "@/shared/lib/axios";
import { handlingErrors } from "@/shared/utils/handlingErrors/handling-errors";
import { ApiBookMethods } from "../constants/api-book-methods";
import { BookCategory, BookCategoryFormValues } from "../model/book.model";
import useApp from "antd/es/app/useApp";

const createBookCategoryRequest = async (payload: BookCategoryFormValues) => {
	try {
		const response = await axios.post<BookCategory>(
			ApiBookMethods.CREATE_BOOK_CATEGORY,
			payload
		);
		return response.data;
	} catch (error: unknown) {
		return handlingErrors(error);
	}
};

export const useCreateBookCategory = () => {
	const queryClient = useQueryClient();
	const { notification } = useApp();

	return useMutation({
		mutationFn: createBookCategoryRequest,
		onSuccess: () => {
			notification.success({
				message: "Категория успешно добавлена",
			});
			queryClient.invalidateQueries({
				queryKey: ["/books/categories"],
			});
		},
	});
};
