export default function Flag({
	code,
	name,
	className = "h-4 w-6",
}: {
	code: string;
	name: string;
	className?: string;
}) {
	return (
		// eslint-disable-next-line @next/next/no-img-element
		<img
			src={`https://flagcdn.com/${code}.svg`}
			alt={`Bendera ${name}`}
			loading="lazy"
			className={`shrink-0 rounded-[3px] object-cover ring-1 ring-black/20 ${className}`}
		/>
	);
}
