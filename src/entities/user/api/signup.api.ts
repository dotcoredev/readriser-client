import { useMutation, useQueryClient } from "@tanstack/react-query";
import { SignupFormValues, SignupResponse } from "../model/user.model";
import { axios } from "@/shared/lib/axios";
import { ApiUserMethods } from "../constants/api-user-methods.constant";
import { handlingErrors } from "@/shared/utils/handlingErrors/handling-errors";

const signupRequest = async (payload: SignupFormValues) => {
	try {
		const response = await axios.post<SignupResponse>(
			ApiUserMethods.SIGNUP,
			payload
		);
		return response.data;
	} catch (error: unknown) {
		return handlingErrors(error);
	}
};

export const useSignup = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: signupRequest,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["profile"],
			});
		},
	});
};
