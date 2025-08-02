import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axios } from "@/shared/lib/axios";
import { ApiUserMethods } from "../constants/api-user-methods.constant";
import { handlingErrors } from "@/shared/utils/handlingErrors/handling-errors";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/shared/hooks/redux/redux.hook";
import { logout } from "../model/auth.slice";

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

	return useMutation({
		mutationFn: logoutRequest,
		onSuccess: () => {
			queryClient.setQueryData(["profile"], null);
			dispatch(logout());
			router.push("/");
		},
	});
};
