"use client";

import { MagnifyingGlass } from "react-loader-spinner";

const Loading = () => {
	return (
		<main className="flex flex-col justify-center items-center bg-slate-200 mx-auto max-w-lg min-h-screen">
			<MagnifyingGlass
				visible={true}
				height="80"
				width="80"
				ariaLabel="MagnifyingGlass-loading"
				wrapperStyle={{}}
				wrapperClass="MagnifyingGlass-wrapper"
				glassColor="#c0efff"
				color="#e15b64"
			/>
		</main>
	);
};

export default Loading;
