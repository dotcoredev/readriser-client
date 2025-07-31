import { apiConfig } from "@/shared/config/api.config";
import axios from "axios";

const instance = axios.create({
	baseURL: apiConfig.baseUrl,
	withCredentials: true,
});

instance.interceptors.response.use(
	(response) => response,
	async (error) => {
		const originalRequest = error.config;
		if (error.response.status === 401 && !originalRequest._retry) {
			originalRequest._retry = true;
			try {
				await instance.post(`/auth/refresh`);
				return instance(originalRequest);
			} catch (refreshError) {
				console.error("Token refresh failed:", refreshError);
				return Promise.reject(refreshError);
			}
		}
		return Promise.reject(error);
	}
);

export { instance };
