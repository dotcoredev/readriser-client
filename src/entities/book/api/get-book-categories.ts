import { useQuery } from "@tanstack/react-query";
import { axios } from "@/shared/lib/axios";
import { handlingErrors } from "@/shared/utils/handlingErrors/handling-errors";
import { ApiBookMethods } from "../constants/api-book-methods";
import { BookCategory } from "../model/book.model";

const getBookCategoriesRequest = async () => {
	try {
		const response = await axios.get<BookCategory[]>(
			ApiBookMethods.GET_BOOK_CATEGORIES
		);
		return response.data;
	} catch (error: unknown) {
		return handlingErrors(error);
	}
};

export const useGetBookCategories = () => {
	return useQuery({
		queryKey: ["/books/categories"],
		queryFn: getBookCategoriesRequest,
		refetchOnMount: false,
		refetchInterval: false,
	});
};
