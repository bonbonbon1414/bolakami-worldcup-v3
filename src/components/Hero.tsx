import Button from "./ui/Button";

const kw =
	"font-medium text-brand-500 underline decoration-brand-500/40 underline-offset-2 transition-colors hover:text-brand-400 hover:decoration-brand-500";

const stats = [
	{ value: "48", label: "Tim" },
	{ value: "104", label: "Laga" },
	{ value: "16", label: "Stadion" },
	{ value: "39", label: "Hari" },
];

export default function Hero() {
	return (
		<section id="beranda" className="border-b border-space-800">
			<div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 sm:py-28 lg:px-8">
				<span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-brand-500">
					<span className="h-2 w-2 rounded-full bg-danger" />
					Live Streaming Gratis
				</span>

				<h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-paper sm:text-5xl lg:text-6xl">
					<span className="text-brand-500">BOLAKAMI</span> — Nonton Bola{" "}
					<span className="text-brand-500">Piala Dunia 2026</span> Gratis Terdepan
				</h1>

				<p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-space-300">
					Nonton{" "}
					<strong className="font-semibold text-paper">104 pertandingan</strong>{" "}
					Piala Dunia 2026{" "}
					<strong className="font-semibold text-paper">gratis</strong> dengan
					komentar bahasa Indonesia. Lihat{" "}
					<a href="#jadwal" className={kw}>
						jadwal lengkap
					</a>
					,{" "}
					<a href="#klasemen" className={kw}>
						preview per grup
					</a>
					, dan{" "}
					<a href="#berita" className={kw}>
						berita terbaru
					</a>{" "}
					menjelang kickoff 11 Juni 2026.
				</p>

				<div className="mt-8 flex flex-wrap items-center justify-center gap-3">
					<Button variant="contained" size="lg" href="#jadwal">
						<span className="h-2 w-2 rounded-full bg-danger" />
						Nonton Live
						<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
							<path d="M5 12h14M13 6l6 6-6 6" />
						</svg>
					</Button>
					<Button variant="texted" size="lg" href="#jadwal">
						Lihat Jadwal Lengkap
					</Button>
				</div>

				<dl className="mt-12 flex flex-wrap items-baseline justify-center gap-x-8 gap-y-3">
					{stats.map((s) => (
						<div key={s.label} className="flex items-baseline gap-1.5">
							<dt className="font-display text-xl font-extrabold tabular-nums text-brand-500">
								{s.value}
							</dt>
							<dd className="text-xs font-medium uppercase tracking-wide text-space-400">
								{s.label}
							</dd>
						</div>
					))}
				</dl>
			</div>
		</section>
	);
}
