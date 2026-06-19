import { todayMatches, type Match } from "@/lib/data";
import Button from "./ui/Button";
import SectionHeading from "./SectionHeading";

const statusMeta: Record<Match["status"], { label: string; cls: string }> = {
	live: { label: "Berlangsung", cls: "bg-danger/15 text-danger" },
	upcoming: { label: "Akan Datang", cls: "bg-brand-500/15 text-brand-500" },
	finished: { label: "Selesai", cls: "bg-space-700 text-space-300" },
};

export default function Schedule() {
	return (
		<section id="jadwal" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
			<SectionHeading
				kicker="19 Juni 2026"
				title="Jadwal Piala Dunia Hari Ini"
				action={
					<Button variant="texted" size="sm" className="hidden sm:inline-flex">
						Jadwal lengkap →
					</Button>
				}
			/>

			{/* 12-column grid system — cards span responsively */}
			<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
				{todayMatches.map((m) => (
					<MatchCard key={m.id} m={m} />
				))}
			</div>
		</section>
	);
}

function MatchCard({ m }: { m: Match }) {
	const meta = statusMeta[m.status];
	return (
		<article className="group rounded-2xl border border-space-700 bg-space-800 p-5 transition-all hover:border-brand-500/50 hover:bg-space-700/50">
			<div className="flex items-center justify-between">
				<span className="text-xs font-medium text-space-400">{m.group}</span>
				<span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${meta.cls}`}>
					{meta.label}
				</span>
			</div>

			<div className="mt-5 space-y-3">
				<TeamRow team={m.home} winner={isWinner(m, "home")} />
				<TeamRow team={m.away} winner={isWinner(m, "away")} />
			</div>

			<div className="mt-5 flex items-center justify-between border-t border-space-700 pt-4">
				<span className="truncate text-xs text-space-400">📍 {m.venue}</span>
				<span
					className={`text-sm font-bold tabular-nums ${
						m.status === "live" ? "text-danger" : "text-brand-500"
					}`}
				>
					{m.time}
				</span>
			</div>
		</article>
	);
}

function TeamRow({
	team,
	winner,
}: {
	team: Match["home"];
	winner: boolean;
}) {
	return (
		<div className="flex items-center justify-between">
			<span className="flex items-center gap-3">
				<span className="text-2xl">{team.flag}</span>
				<span className={`text-sm ${winner ? "font-bold text-paper" : "font-medium text-space-300"}`}>
					{team.name}
				</span>
			</span>
			<span className={`text-lg font-extrabold tabular-nums ${winner ? "text-brand-500" : "text-paper"}`}>
				{team.score ?? "–"}
			</span>
		</div>
	);
}

function isWinner(m: Match, side: "home" | "away") {
	if (m.home.score == null || m.away.score == null) return false;
	return side === "home"
		? m.home.score > m.away.score
		: m.away.score > m.home.score;
}
