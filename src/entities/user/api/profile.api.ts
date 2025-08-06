import { useQuery } from "@tanstack/react-query";
import { User } from "../model/user.model";
import { axios } from "@/shared/lib/axios";
import { isAxiosError } from "axios";
import { ApiUserMethods } from "../constants/api-user-methods";

const profileRequest = async (): Promise<User> => {
	try {
		const response = await axios.get<User>(ApiUserMethods.GET_PROFILE);
		return response.data;
	} catch (error: unknown) {
		if (isAxiosError(error)) {
			throw new Error(error.response?.data?.message || "Profile failed");
		}
		throw new Error("Profile failed");
	}
};

export const useProfile = (isAuthenticated: boolean = false) =>
	useQuery({
		queryKey: ["profile"],
		queryFn: profileRequest,
		refetchOnMount: false,
		refetchInterval: false,
		enabled: isAuthenticated,
		retry: false,
	});

export const checkProfileRequest = async (
	accessToken: string | null = ""
): Promise<boolean> => {
	try {
		await axios.get<User>(ApiUserMethods.GET_PROFILE, {
			headers: {
				Authorization: accessToken,
			},
		});
		return true;
	} catch {
		return false;
	}
};
