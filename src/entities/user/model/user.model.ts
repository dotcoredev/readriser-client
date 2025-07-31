export interface User {
	_id: string;
	email: string;
	firstname?: string;
	lastname?: string;
	login: string;
	createdAt: string;
	role: UserRole;
}

export interface UserRole {
	_id: string;
	role: string;
	access: string;
	description?: string;
}

export interface SigninResponse {
	accessToken: string;
}

export interface SigninFormValues {
	email: string;
	password: string;
}
