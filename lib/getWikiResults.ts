export const getWikiResults = async (
	searchTerm: string
): Promise<SearchResult> => {
	const searchParams = new URLSearchParams({
		q: decodeURI(searchTerm),
		limit: "20",
		format: "json",
		origin: "*",
	});

	const response = await fetch(
		"https://en.wikipedia.org/w/rest.php/v1/search/page?" + searchParams
	);

	return response.json();
};
