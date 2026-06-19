import Logo from "./Logo";

const groups = [
	{
		title: "Jelajah",
		links: ["Berita Terbaru", "Jadwal Piala Dunia", "Klasemen", "Top Skor", "Highlight"],
	},
	{
		title: "Kompetisi",
		links: ["Piala Dunia 2026", "Liga Indonesia", "Liga Champions", "Premier League", "La Liga"],
	},
	{
		title: "Bolakami",
		links: ["Tentang Kami", "Redaksi", "Karier", "Kontak", "Pedoman Media Siber"],
	},
];

export default function Footer() {
	return (
		<footer className="border-t border-space-700 bg-space-950">
			<div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
				<div className="grid gap-10 lg:grid-cols-[1.5fr_repeat(3,1fr)]">
					<div>
						<Logo />
						<p className="mt-4 max-w-xs text-sm leading-relaxed text-space-400">
							Portal berita bola terbaru dan jadwal Piala Dunia hari ini. Cepat,
							akurat, dan selalu update.
						</p>
						<div className="mt-5 flex gap-3">
							{["𝕏", "f", "▶", "📷"].map((s) => (
								<a
									key={s}
									href="#"
									className="grid h-9 w-9 place-items-center rounded-full border border-space-600 text-space-300 transition-colors hover:border-brand-500 hover:text-brand-500"
									aria-label="Social"
								>
									{s}
								</a>
							))}
						</div>
					</div>

					{groups.map((g) => (
						<div key={g.title}>
							<h4 className="text-sm font-bold text-paper">{g.title}</h4>
							<ul className="mt-4 space-y-2.5">
								{g.links.map((l) => (
									<li key={l}>
										<a
											href="#"
											className="text-sm text-space-400 transition-colors hover:text-brand-500"
										>
											{l}
										</a>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				<div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-space-700 pt-6 text-sm text-space-400 sm:flex-row">
					<p>© 2026 Bolakami. Seluruh hak cipta dilindungi.</p>
					<div className="flex gap-6">
						<a href="#" className="hover:text-brand-500">
							Kebijakan Privasi
						</a>
						<a href="#" className="hover:text-brand-500">
							Syarat & Ketentuan
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
