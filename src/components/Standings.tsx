import { standings, topScorers } from "@/lib/data";
import Flag from "./ui/Flag";
import SectionHeading from "./SectionHeading";

const cols = [
	{ key: "p", label: "P", title: "Pertandingan dimainkan" },
	{ key: "w", label: "M", title: "Menang" },
	{ key: "d", label: "S", title: "Seri" },
	{ key: "l", label: "K", title: "Kalah" },
] as const;

export default function Standings() {
	return (
		<section id="klasemen" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
			<SectionHeading title="Klasemen & Top Skor" />

			<div className="grid gap-6 lg:grid-cols-3">
				{/* Standings table — spans 2 of 3 columns */}
				<div className="overflow-hidden rounded-2xl border border-space-700 bg-space-800 lg:col-span-2">
					<div className="flex items-center justify-between border-b border-space-700 px-5 py-4">
						<h3 className="font-display text-base font-bold text-paper">
							Klasemen Grup C
						</h3>
						<span className="text-xs font-medium text-space-300">Matchday 3</span>
					</div>

					<div className="overflow-x-auto">
						<table className="w-full text-sm">
							<thead>
								<tr className="border-b border-space-700 bg-space-950/30 text-xs uppercase tracking-wide text-space-300">
									<th scope="col" className="px-4 py-3 text-left font-semibold">
										#
									</th>
									<th scope="col" className="px-2 py-3 text-left font-semibold">
										Tim
									</th>
									{cols.map((c) => (
										<th key={c.key} scope="col" className="px-2 py-3 text-center font-semibold">
											<abbr title={c.title} className="cursor-help no-underline">
												{c.label}
											</abbr>
										</th>
									))}
									<th scope="col" className="px-2 py-3 text-center font-semibold">
										<abbr title="Selisih Gol" className="cursor-help no-underline">
											SG
										</abbr>
									</th>
									<th scope="col" className="px-4 py-3 text-center font-semibold">
										Poin
									</th>
								</tr>
							</thead>
							<tbody>
								{standings.map((row) => {
									const qual = row.pos <= 2;
									return (
										<tr
											key={row.team}
											className={`border-b border-space-700/60 transition-colors last:border-0 hover:bg-space-700/40 ${
												qual ? "bg-brand-500/[0.06]" : ""
											}`}
										>
											<td className="px-4 py-3">
												<span
													className={`grid h-6 w-6 place-items-center rounded-md text-xs font-bold ${
														qual
															? "bg-brand-500 text-space-950"
															: "bg-space-700 text-space-300"
													}`}
												>
													{row.pos}
												</span>
											</td>
											<th scope="row" className="px-2 py-3 text-left font-normal">
												<span className="flex items-center gap-2.5 font-semibold text-paper">
													<Flag code={row.code} name={row.team} className="h-4 w-6" />
													{row.team}
												</span>
											</th>
											<td className="px-2 py-3 text-center tabular-nums text-space-300">{row.p}</td>
											<td className="px-2 py-3 text-center tabular-nums text-space-300">{row.w}</td>
											<td className="px-2 py-3 text-center tabular-nums text-space-300">{row.d}</td>
											<td className="px-2 py-3 text-center tabular-nums text-space-300">{row.l}</td>
											<td className="px-2 py-3 text-center tabular-nums text-space-300">
												{row.gd > 0 ? `+${row.gd}` : row.gd}
											</td>
											<td className="px-4 py-3 text-center font-display text-base font-extrabold tabular-nums text-brand-500">
												{row.pts}
											</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					</div>

					<div className="space-y-2 border-t border-space-700 px-5 py-4 text-xs text-space-300">
						<p className="flex items-center gap-2">
							<span className="h-2.5 w-2.5 rounded-sm bg-brand-500" />
							Lolos ke babak 16 besar
						</p>
						<p>
							P: Pertandingan · M: Menang · S: Seri · K: Kalah · SG: Selisih Gol
						</p>
					</div>
				</div>

				{/* Top scorers */}
				<div className="overflow-hidden rounded-2xl border border-space-700 bg-space-800">
					<div className="flex items-center gap-2 border-b border-space-700 px-5 py-4">
						<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand-500" aria-hidden>
							<circle cx="12" cy="12" r="10" />
							<circle cx="12" cy="12" r="6" />
							<circle cx="12" cy="12" r="2" />
						</svg>
						<h3 className="font-display text-base font-bold text-paper">Top Skor</h3>
					</div>

					<ol className="p-3">
						{topScorers.map((s, i) => (
							<li
								key={s.name}
								className="flex items-center gap-3 rounded-xl px-2 py-2.5 transition-colors hover:bg-space-700/50"
							>
								<span
									className={`grid h-7 w-7 shrink-0 place-items-center rounded-full text-xs font-bold ${
										i === 0
											? "bg-brand-500 text-space-950"
											: "bg-space-700 text-space-300"
									}`}
								>
									{i + 1}
								</span>
								<Flag code={s.code} name={s.team} className="h-5 w-7" />
								<div className="min-w-0 flex-1">
									<p className="truncate text-sm font-semibold text-paper">{s.name}</p>
									<p className="text-xs text-space-400">{s.team}</p>
								</div>
								<span className="flex items-baseline gap-1">
									<span className="font-display text-lg font-extrabold tabular-nums text-brand-500">
										{s.goals}
									</span>
									<span className="text-xs text-space-300">gol</span>
								</span>
							</li>
						))}
					</ol>
				</div>
			</div>
		</section>
	);
}
