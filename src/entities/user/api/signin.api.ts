import { useMutation, useQueryClient } from "@tanstack/react-query";
import { SigninFormValues, SigninResponse } from "../model/user.model";
import { axios } from "@/shared/lib/axios";
import { ApiUserMethods } from "../constants/api-user-methods.constant";
import { handlingErrors } from "@/shared/utils/handlingErrors/handling-errors";
import { useAppDispatch } from "@/shared/hooks/redux/redux.hook";
import { login } from "../model/auth.slice";

const signinRequest = async (payload: SigninFormValues) => {
	try {
		const response = await axios.post<SigninResponse>(
			ApiUserMethods.SIGNIN,
			payload
		);
		return response.data;
	} catch (error: unknown) {
		return handlingErrors(error);
	}
};

export const useSignin = () => {
	const dispatch = useAppDispatch();
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: signinRequest,
		onSuccess: () => {
			dispatch(login());
			queryClient.invalidateQueries({
				queryKey: ["profile"],
			});
		},
	});
};
