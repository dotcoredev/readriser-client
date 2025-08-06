export interface User {
	_id: string;
	email: string;
	firstname?: string;
	lastname?: string;
	login: string;
	createdAt: string;
	role: UserRole;
	avatar: File;
}

interface UserRole {
	_id: string;
	role: string;
	access: string;
	description?: string;
}

export interface File {
	_id: string;
	url: string;
}

export interface SigninResponse {
	accessToken: string;
}

export interface SigninFormValues {
	email: string;
	password: string;
}

export interface SignupFormValues {
	email: string;
	login: string;
	password: string;
	repeat_password: string;
}

export interface SignupResponse {
	accessToken: string;
}
