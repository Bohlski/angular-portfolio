export interface Project {
	id: number;
	title: string;
	desc: string;
	tech: string;
	img?: string;
	link?: string;
}

export interface BlogPost {
	id: number;
	title: string;
	body: string;
	created_on: string;
	last_modified: string;
	categories: string[];
}