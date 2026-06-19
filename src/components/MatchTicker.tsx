import { todayMatches, type Match } from "@/lib/data";

export default function MatchTicker() {
	return (
		<section className="border-b border-space-700 bg-space-950/60">
			<div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
				<span className="hidden shrink-0 items-center gap-2 text-xs font-bold uppercase tracking-wide text-brand-500 sm:flex">
					<span className="h-2 w-2 animate-pulse rounded-full bg-brand-500" />
					Skor Langsung
				</span>
				<div className="no-scrollbar flex gap-3 overflow-x-auto">
					{todayMatches.map((m) => (
						<TickerCard key={m.id} m={m} />
					))}
				</div>
			</div>
		</section>
	);
}

function TickerCard({ m }: { m: Match }) {
	const live = m.status === "live";
	const finished = m.status === "finished";
	return (
		<div className="flex shrink-0 items-center gap-3 rounded-xl border border-space-700 bg-space-800 px-4 py-2">
			<span
				className={`text-[11px] font-bold ${
					live ? "text-danger" : finished ? "text-space-400" : "text-brand-500"
				}`}
			>
				{m.time}
			</span>
			<div className="text-xs">
				<div className="flex items-center justify-between gap-3">
					<span className="text-paper">
						{m.home.flag} {m.home.name}
					</span>
					<span className="font-bold tabular-nums text-paper">
						{m.home.score ?? "-"}
					</span>
				</div>
				<div className="flex items-center justify-between gap-3">
					<span className="text-paper">
						{m.away.flag} {m.away.name}
					</span>
					<span className="font-bold tabular-nums text-paper">
						{m.away.score ?? "-"}
					</span>
				</div>
			</div>
		</div>
	);
}
