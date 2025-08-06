import { User, File } from "@/entities/user/model/user.model";

export interface Book {
	_id: string;
	title: string;
	author: string;
	cover: File;
	user: string | User;
	category: BookCategory | string;
}

export interface BookCategory {
	_id: string;
	cover: File;
	count: number;
	title: string;
	user: string | User;
}

export interface BookCategoryFormValues {
	title: string;
	cover?: File | null;
}
