import { useMutation, useQueryClient } from "@tanstack/react-query";
import { SigninFormValues, SigninResponse } from "../model/user.model";
import { axios } from "@/shared/lib/axios";
import { isAxiosError } from "axios";
import { ApiUserMethods } from "../constants/api-user-methods.constant";
import { ErrorFormInterface } from "@/shared/interfaces/error.interface";

const signinRequest = async (
	payload: SigninFormValues
): Promise<SigninResponse> => {
	try {
		const response = await axios.post<SigninResponse>(
			ApiUserMethods.SIGNIN,
			payload
		);
		return response.data;
	} catch (error: unknown) {
		if (isAxiosError(error)) {
			const errors = error.response?.data?.message;
			if (Array.isArray(errors)) {
				throw errors.map((err: ErrorFormInterface) => ({
					errors: [err.message],
					name: err.field,
				}));
			}
			throw new Error(errors || "Signin failed");
		}
		throw new Error("Signin failed");
	}
};

export const useSignin = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: signinRequest,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["profile"],
			});
		},
	});
};
