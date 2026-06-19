import { standings, topScorers } from "@/lib/data";
import Flag from "./ui/Flag";
import SectionHeading from "./SectionHeading";

export default function Standings() {
	return (
		<section id="klasemen" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
			<SectionHeading title="Klasemen & Top Skor" />

			<div className="grid gap-6 lg:grid-cols-3">
				{/* Standings table — spans 2 of 3 columns */}
				<div className="overflow-hidden rounded-2xl border border-space-700 bg-space-800 lg:col-span-2">
					<div className="overflow-x-auto">
						<table className="w-full text-sm">
							<thead>
								<tr className="border-b border-space-700 text-left text-xs uppercase tracking-wide text-space-400">
									<th className="px-4 py-3 font-semibold">#</th>
									<th className="px-2 py-3 font-semibold">Tim</th>
									<th className="px-2 py-3 text-center font-semibold">M</th>
									<th className="px-2 py-3 text-center font-semibold">M</th>
									<th className="px-2 py-3 text-center font-semibold">S</th>
									<th className="px-2 py-3 text-center font-semibold">K</th>
									<th className="px-2 py-3 text-center font-semibold">SG</th>
									<th className="px-4 py-3 text-center font-semibold">Poin</th>
								</tr>
							</thead>
							<tbody>
								{standings.map((row) => (
									<tr
										key={row.team}
										className="border-b border-space-700/60 last:border-0 transition-colors hover:bg-space-700/40"
									>
										<td className="px-4 py-3">
											<span
												className={`grid h-6 w-6 place-items-center rounded-md text-xs font-bold ${
													row.pos <= 2
														? "bg-brand-500 text-space-950"
														: "bg-space-700 text-space-300"
												}`}
											>
												{row.pos}
											</span>
										</td>
										<td className="px-2 py-3">
											<span className="flex items-center gap-2 font-semibold text-paper">
												<Flag code={row.code} name={row.team} className="h-4 w-6" />
												{row.team}
											</span>
										</td>
										<td className="px-2 py-3 text-center text-space-300">{row.p}</td>
										<td className="px-2 py-3 text-center text-space-300">{row.w}</td>
										<td className="px-2 py-3 text-center text-space-300">{row.d}</td>
										<td className="px-2 py-3 text-center text-space-300">{row.l}</td>
										<td className="px-2 py-3 text-center text-space-300">
											{row.gd > 0 ? `+${row.gd}` : row.gd}
										</td>
										<td className="px-4 py-3 text-center font-extrabold text-brand-500">
											{row.pts}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
					<div className="flex items-center gap-2 px-4 py-3 text-xs text-space-400">
						<span className="h-2 w-2 rounded-sm bg-brand-500" />
						Lolos ke babak 16 besar
					</div>
				</div>

				{/* Top scorers */}
				<div className="rounded-2xl border border-space-700 bg-space-800 p-5">
					<h3 className="font-display text-lg font-bold text-paper">
						Top Skor 👟
					</h3>
					<ul className="mt-4 space-y-1">
						{topScorers.map((s, i) => (
							<li
								key={s.name}
								className="flex items-center gap-3 rounded-xl px-2 py-2.5 transition-colors hover:bg-space-700/50"
							>
								<span className="w-5 text-center text-sm font-bold text-space-400">
									{i + 1}
								</span>
								<Flag code={s.code} name={s.team} className="h-5 w-7" />
								<div className="min-w-0 flex-1">
									<p className="truncate text-sm font-semibold text-paper">
										{s.name}
									</p>
									<p className="text-xs text-space-400">{s.team}</p>
								</div>
								<span className="font-display text-lg font-extrabold text-brand-500">
									{s.goals}
								</span>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
}
