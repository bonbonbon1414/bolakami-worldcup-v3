import Button from "./ui/Button";
import Countdown from "./Countdown";

export default function Hero() {
	return (
		<section
			id="beranda"
			className="pitch-glow relative overflow-hidden border-b border-space-700"
		>
			{/* 10-column hero grid feel — content constrained, generous gutters */}
			<div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
				<div>
					<span className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-500">
						<span className="relative flex h-2 w-2">
							<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-500 opacity-75" />
							<span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
						</span>
						Piala Dunia 2026 · Live
					</span>

					<h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-paper sm:text-5xl lg:text-6xl">
						Berita Bola Terbaru &{" "}
						<span className="text-brand-500">Jadwal Piala Dunia</span> Hari Ini
					</h1>

					<p className="mt-5 max-w-lg text-base leading-relaxed text-space-300">
						Skor langsung, klasemen real-time, dan analisis pertandingan dari
						seluruh dunia. Jangan lewatkan satu gol pun bersama Bolakami.
					</p>

					<div className="mt-8 flex flex-wrap items-center gap-3">
						<Button variant="contained" size="lg" href="#jadwal">
							Lihat Jadwal Hari Ini
						</Button>
						<Button variant="outlined" size="lg" href="#berita">
							Berita Terbaru
						</Button>
					</div>

					<div className="mt-10">
						<p className="mb-3 text-sm font-medium text-space-400">
							Kickoff laga besar berikutnya dalam:
						</p>
						<Countdown />
					</div>
				</div>

				{/* Featured match card */}
				<div className="relative">
					<div className="rounded-3xl border border-space-600 bg-gradient-to-b from-space-800 to-space-900 p-6 shadow-2xl shadow-black/40">
						<div className="flex items-center justify-between">
							<span className="rounded-full bg-brand-500/15 px-3 py-1 text-xs font-semibold text-brand-500">
								Laga Pilihan
							</span>
							<span className="flex items-center gap-1.5 text-xs font-semibold text-danger">
								<span className="h-2 w-2 animate-pulse rounded-full bg-danger" />
								LIVE 67&apos;
							</span>
						</div>

						<div className="mt-8 flex items-center justify-between">
							<TeamBadge flag="🇦🇷" name="Argentina" />
							<div className="text-center">
								<div className="font-display text-5xl font-extrabold tabular-nums text-paper">
									2 <span className="text-space-500">:</span> 1
								</div>
								<p className="mt-1 text-xs text-space-400">Grup C</p>
							</div>
							<TeamBadge flag="🇧🇷" name="Brasil" />
						</div>

						<div className="mt-8 rounded-2xl bg-space-950/50 p-4 text-center">
							<p className="text-xs uppercase tracking-wide text-space-400">
								Estadio Azteca · Mexico City
							</p>
							<div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-space-700">
								<div className="h-full w-[67%] rounded-full bg-brand-500" />
							</div>
						</div>

						<Button variant="split" size="md" className="mt-5 w-full">
							Tonton Live Streaming
						</Button>
					</div>

					{/* floating stat chip */}
					<div className="absolute -left-4 -top-4 hidden rounded-2xl border border-space-600 bg-space-800 px-4 py-3 shadow-xl sm:block">
						<p className="font-display text-2xl font-extrabold text-brand-500">
							48
						</p>
						<p className="text-xs text-space-400">Tim Peserta</p>
					</div>
				</div>
			</div>
		</section>
	);
}

function TeamBadge({ flag, name }: { flag: string; name: string }) {
	return (
		<div className="flex flex-col items-center gap-2">
			<span className="grid h-16 w-16 place-items-center rounded-2xl border border-space-600 bg-space-800 text-3xl">
				{flag}
			</span>
			<span className="text-sm font-semibold text-paper">{name}</span>
		</div>
	);
}
