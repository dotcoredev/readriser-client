import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axios } from "@/shared/lib/axios";
import { handlingErrors } from "@/shared/utils/handlingErrors/handling-errors";
import { ApiBookMethods } from "../constants/api-book-methods";
import { DeleteBookCategoryValues } from "../model/book.model";
import useApp from "antd/es/app/useApp";

const deleteBookCategoryRequest = async (payload: DeleteBookCategoryValues) => {
	try {
		const response = await axios.delete<boolean>(
			ApiBookMethods.DELETE_BOOK_CATEGORY,
			{ params: payload }
		);
		return response.data;
	} catch (error: unknown) {
		return handlingErrors(error);
	}
};

export const useDeleteBookCategory = () => {
	const queryClient = useQueryClient();
	const { notification } = useApp();

	return useMutation({
		mutationFn: deleteBookCategoryRequest,
		onSuccess: () => {
			notification.success({
				message: "Категория успешно удалена",
			});
			queryClient.invalidateQueries({
				queryKey: ["/books/categories"],
			});
		},
	});
};
