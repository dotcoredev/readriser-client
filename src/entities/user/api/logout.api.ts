import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axios } from "@/shared/lib/axios";
import { ApiUserMethods } from "../constants/api-user-methods";
import { handlingErrors } from "@/shared/utils/handlingErrors/handling-errors";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/shared/hooks/redux/redux.hook";
import { logout } from "../model/auth.slice";
import { useNotification } from "@/shared/hooks/notification/notification.hook";

const logoutRequest = async () => {
	try {
		await axios.post<boolean>(ApiUserMethods.LOGOUT);
		return true;
	} catch (error: unknown) {
		return handlingErrors(error);
	}
};

export const useLogout = () => {
	const dispatch = useAppDispatch();
	const queryClient = useQueryClient();
	const router = useRouter();
	const { openErrorNotification } = useNotification();

	const notification = (errorText: string) => {
		openErrorNotification(
			`Ошибка, попробуйте позже`,
			errorText || "Неизвестная ошибка"
		);
	};

	return useMutation({
		mutationFn: logoutRequest,
		onSuccess: () => {
			queryClient.setQueryData(["profile"], null);
			dispatch(logout());
			router.push("/");
		},
		onError: (error: unknown) => {
			if (error as Error) {
				notification((error as Error).message);
			} else {
				notification("Неизвестная ошибка");
			}
		},
	});
};
