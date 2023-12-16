import { getWikiResults } from "@/lib/getWikiResults";
import Item from "./components/Item";

type Props = {
	params: {
		searchTerm: string;
	};
};

export const generateMetadata = async ({ params: { searchTerm } }: Props) => {
	const wikiData = getWikiResults(searchTerm);
	const wiki = await wikiData;
	const displayTerm = searchTerm.replaceAll("%20", " ");
	const results = wiki?.pages;

	if (results?.length === 0) {
		return {
			title: `${displayTerm} Not Found`,
		};
	}

	return {
		title: `${displayTerm}`,
		description: `Search results for ${displayTerm}`,
	};
};

const SearchResults = async ({ params: { searchTerm } }: Props) => {
	const wikiData = getWikiResults(searchTerm);
	const wiki = await wikiData;
	const results = wiki?.pages;

	return (
		<main className="flex justify-center flex-col bg-slate-200 mx-auto max-w-lg py-1 min-h-screen">
			{results!.length > 0 ? (
				Object.values(results!).map((result) => (
					<Item result={result} key={result.id} />
				))
			) : (
				<div className="flex items-center justify-center">
					<h2 className="m-auto w-1/2 p-2 text-black text-xl">{`${searchTerm.replaceAll(
						"%20",
						" "
					)} was not found`}</h2>
				</div>
			)}
		</main>
	);
};

export default SearchResults;
