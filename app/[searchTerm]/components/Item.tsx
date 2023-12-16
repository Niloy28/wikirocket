import Link from "next/link";
import Image from "next/image";

type Props = {
	result: Result;
};

const Item = ({ result }: Props) => {
	const itemTextCol = (
		<div className="text-black flex flex-col justify-center">
			<h2>
				<Link
					href={`https://en.wikipedia.org/?curid=${result.id}`}
					target="_blank"
					className="text-xl text-black font-bold underline"
				>
					{result.title}
				</Link>
			</h2>
			<p>{result.description}</p>
		</div>
	);

	const content = result.thumbnail?.url ? (
		<article className="m-4 max-w-lg">
			<div className="flex flex-row gap-4">
				<div className="flex flex-col justify-center">
					<Image
						src={`https:${result.thumbnail.url}`}
						alt={result.title}
						width={result.thumbnail.width}
						height={result.thumbnail.height}
						loading="lazy"
					/>
				</div>
				{itemTextCol}
			</div>
		</article>
	) : (
		<article className="m-4 max-w-lg">{itemTextCol}</article>
	);

	return content;
};

export default Item;
