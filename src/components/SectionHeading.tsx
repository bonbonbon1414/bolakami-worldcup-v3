import type { ReactNode } from "react";

export default function SectionHeading({
	title,
	action,
}: {
	title: string;
	action?: ReactNode;
}) {
	return (
		<div className="mb-8 flex items-end justify-between gap-4">
			<h2 className="font-display text-2xl font-extrabold tracking-tight text-paper sm:text-3xl">
				{title}
			</h2>
			{action}
		</div>
	);
}
