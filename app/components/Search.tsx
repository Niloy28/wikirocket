"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const Search = () => {
	const [search, setSearch] = useState("");
	const router = useRouter();

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// reset search term
		setSearch("");

		router.push(`/${search}/`);
	};

	return (
		<form
			className="w-50 flex justify-center md:justify-between"
			onSubmit={handleSubmit}
		>
			<input
				type="text"
				name="search"
				id="search"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				className="bg-white text-xl p-2 rounded-xl w-80"
				placeholder="Search"
			/>
			<button
				type="submit"
				className="bg-slate-300 p-2 text-xl rounded-xl ml-2 font-bold"
			>
				🚀
			</button>
		</form>
	);
};

export default Search;
