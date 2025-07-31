import { ErrorFormInterface } from "@/shared/interfaces/error.interface";
import { isAxiosError } from "axios";

export function handlingErrors(error: unknown) {
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
