type Result = {
	id: string;
	key: string;
	title: string;
	description: string;
	excerpt: string;
	thumbnail?: {
		url: string;
		width: number;
		height: number;
	};
};

type SearchResult = {
	pages?: Result[];
};
