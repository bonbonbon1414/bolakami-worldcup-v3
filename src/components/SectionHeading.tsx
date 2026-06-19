import type { ReactNode } from "react";

export default function SectionHeading({
	kicker,
	title,
	action,
}: {
	kicker?: string;
	title: string;
	action?: ReactNode;
}) {
	return (
		<div className="mb-8 flex items-end justify-between gap-4">
			<div>
				{kicker && (
					<p className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-brand-500">
						<span className="h-3 w-1 rounded-full bg-brand-500" />
						{kicker}
					</p>
				)}
				<h2 className="font-display text-2xl font-extrabold tracking-tight text-paper sm:text-3xl">
					{title}
				</h2>
			</div>
			{action}
		</div>
	);
}
