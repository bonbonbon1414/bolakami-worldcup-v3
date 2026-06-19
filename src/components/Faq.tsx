import SectionHeading from "./SectionHeading";

const faqs = [
	{
		q: "Apa itu Bolakami?",
		a: "Bolakami adalah portal berita bola yang menyajikan berita terbaru, jadwal Piala Dunia 2026, skor langsung, klasemen, dan analisis pertandingan dari seluruh dunia — cepat, akurat, dan selalu update.",
	},
	{
		q: "Kapan Piala Dunia 2026 berlangsung?",
		a: "Piala Dunia 2026 digelar pada 11 Juni hingga 19 Juli 2026 di tiga negara tuan rumah: Amerika Serikat, Kanada, dan Meksiko.",
	},
	{
		q: "Berapa tim yang tampil di Piala Dunia 2026?",
		a: "Untuk pertama kalinya turnamen diikuti 48 tim yang dibagi ke dalam 12 grup, dengan total 104 pertandingan sepanjang turnamen.",
	},
	{
		q: "Apakah menonton di Bolakami gratis?",
		a: "Ya. Kamu bisa mengikuti skor langsung, jadwal, dan berita Piala Dunia 2026 secara gratis dengan komentar bahasa Indonesia, tanpa perlu mendaftar.",
	},
	{
		q: "Di mana saya bisa melihat jadwal dan klasemen terbaru?",
		a: "Jadwal pertandingan hari ini tersedia di bagian Jadwal, sedangkan klasemen grup dan top skor dapat dilihat di bagian Klasemen pada halaman ini.",
	},
	{
		q: "Apakah berita diperbarui setiap hari?",
		a: "Tentu. Tim redaksi Bolakami memperbarui berita, hasil pertandingan, dan statistik setiap hari sepanjang turnamen berlangsung.",
	},
];

export default function Faq() {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: faqs.map((f) => ({
			"@type": "Question",
			name: f.q,
			acceptedAnswer: { "@type": "Answer", text: f.a },
		})),
	};

	return (
		<section id="faq" className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
			<SectionHeading title="Pertanyaan Umum" />

			<div className="space-y-3">
				{faqs.map((f) => (
					<details
						key={f.q}
						className="group rounded-2xl border border-space-700 bg-space-800 px-5 transition-colors hover:border-brand-500/40 open:border-brand-500/40"
					>
						<summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-base font-semibold text-paper [&::-webkit-details-marker]:hidden">
							{f.q}
							<svg
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2.5"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="shrink-0 text-brand-500 transition-transform duration-200 group-open:rotate-180"
								aria-hidden
							>
								<path d="m6 9 6 6 6-6" />
							</svg>
						</summary>
						<p className="pb-5 pr-6 text-sm leading-relaxed text-space-300">
							{f.a}
						</p>
					</details>
				))}
			</div>

			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
		</section>
	);
}
