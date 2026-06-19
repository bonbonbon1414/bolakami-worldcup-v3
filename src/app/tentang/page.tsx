import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
	title: "Tentang Bolakami — Portal Berita Bola & Piala Dunia",
	description:
		"Mengenal Bolakami: portal berita bola terbaru, jadwal Piala Dunia, skor langsung, klasemen, dan analisis pertandingan yang cepat, akurat, dan selalu update.",
};

const features = [
	{
		title: "Berita Terbaru",
		desc: "Liputan harian seputar Piala Dunia, timnas, transfer, dan kompetisi dunia — disajikan ringkas dan tepat waktu.",
		path: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5A2.5 2.5 0 0 0 6.5 22H20V2H6.5A2.5 2.5 0 0 0 4 4.5v15z",
	},
	{
		title: "Skor Langsung",
		desc: "Pantau jalannya pertandingan secara real-time dengan pembaruan skor menit per menit dari seluruh dunia.",
		path: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 0v4m0 12v4m10-10h-4M6 12H2",
	},
	{
		title: "Klasemen & Statistik",
		desc: "Data klasemen grup, top skor, dan statistik tim yang diperbarui agar kamu tak ketinggalan perkembangan turnamen.",
		path: "M3 3v18h18M7 16V9m5 7V5m5 11v-4",
	},
	{
		title: "Analisis & Preview",
		desc: "Prediksi laga dan ulasan taktik dari tim redaksi untuk membantu kamu memahami sepak bola lebih dalam.",
		path: "M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11",
	},
];

const stats = [
	{ value: "48", label: "Tim Peserta" },
	{ value: "104", label: "Pertandingan" },
	{ value: "16", label: "Kota Tuan Rumah" },
	{ value: "24/7", label: "Update Berita" },
];

export default function TentangPage() {
	return (
		<div className="min-h-screen bg-space-900">
			<Navbar />
			<main>
				{/* Header */}
				<section className="pitch-glow border-b border-space-700">
					<div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
						<p className="mb-3 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wide text-brand-500">
							<span className="h-3 w-1 rounded-full bg-brand-500" />
							Tentang Kami
						</p>
						<h1 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-paper sm:text-5xl">
							Tentang <span className="text-brand-500">Bolakami</span>
						</h1>
						<p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-space-300">
							Bolakami adalah portal berita bola yang menyajikan informasi
							terbaru seputar Piala Dunia, jadwal pertandingan, skor langsung,
							klasemen, dan analisis dari seluruh dunia. Cepat, akurat, dan
							selalu update.
						</p>
					</div>
				</section>

				{/* Mission */}
				<section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
					<h2 className="font-display text-2xl font-extrabold tracking-tight text-paper sm:text-3xl">
						Misi Kami
					</h2>
					<div className="mt-5 space-y-4 text-base leading-relaxed text-space-300">
						<p>
							Kami percaya setiap penggemar berhak mendapatkan kabar bola yang
							cepat dan dapat dipercaya. Bolakami hadir untuk menjembatani jutaan
							penggemar dengan momen-momen terbaik dari lapangan hijau — tanpa
							perlu berpindah dari satu sumber ke sumber lain.
						</p>
						<p>
							Mulai dari laga pembuka hingga partai final, tim redaksi kami
							berkomitmen menyuguhkan liputan yang ringkas, jujur, dan relevan
							bagi pencinta sepak bola di Indonesia.
						</p>
					</div>
				</section>

				{/* Features */}
				<section className="border-y border-space-700 bg-space-950/40">
					<div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
						<h2 className="font-display text-2xl font-extrabold tracking-tight text-paper sm:text-3xl">
							Yang Kami Tawarkan
						</h2>
						<div className="mt-8 grid gap-4 sm:grid-cols-2">
							{features.map((f) => (
								<div
									key={f.title}
									className="rounded-2xl border border-space-700 bg-space-800 p-6"
								>
									<span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-500/15 text-brand-500">
										<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
											<path d={f.path} />
										</svg>
									</span>
									<h3 className="mt-4 text-lg font-bold text-paper">{f.title}</h3>
									<p className="mt-2 text-sm leading-relaxed text-space-300">
										{f.desc}
									</p>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Stats */}
				<section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
					<div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
						{stats.map((s) => (
							<div
								key={s.label}
								className="rounded-2xl border border-space-700 bg-space-800 p-6 text-center"
							>
								<p className="font-display text-3xl font-extrabold text-brand-500 sm:text-4xl">
									{s.value}
								</p>
								<p className="mt-1 text-sm text-space-300">{s.label}</p>
							</div>
						))}
					</div>
				</section>

				{/* CTA */}
				<section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
					<div className="pitch-glow relative overflow-hidden rounded-3xl border border-space-700 bg-space-800 p-8 text-center sm:p-12">
						<h2 className="font-display text-2xl font-extrabold tracking-tight text-paper sm:text-3xl">
							Siap mengikuti aksi terbaru?
						</h2>
						<p className="mx-auto mt-3 max-w-md text-space-300">
							Jelajahi berita bola terbaru dan jadwal Piala Dunia hari ini
							bersama Bolakami.
						</p>
						<div className="mt-6 flex flex-wrap items-center justify-center gap-3">
							<Button variant="contained" size="md" href="/#berita">
								Baca Berita
							</Button>
							<Button variant="outlined" size="md" href="/#jadwal">
								Lihat Jadwal
							</Button>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}
