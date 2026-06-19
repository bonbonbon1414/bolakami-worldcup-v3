import Button from "./ui/Button";

export default function Newsletter() {
	return (
		<section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
			<div className="pitch-glow relative overflow-hidden rounded-3xl border border-space-700 bg-space-800 p-8 sm:p-12">
				<div className="relative grid gap-8 lg:grid-cols-2 lg:items-center">
					<div>
						<h2 className="font-display text-2xl font-extrabold tracking-tight text-paper sm:text-3xl">
							Jangan Ketinggalan Kabar Bola ⚡
						</h2>
						<p className="mt-3 max-w-md text-space-300">
							Berlangganan newsletter Bolakami dan dapatkan rangkuman berita,
							jadwal, serta skor langsung langsung di inbox kamu setiap hari.
						</p>
					</div>

					{/* Design-system text field + contained button */}
					<form className="flex w-full flex-col gap-3 sm:flex-row">
						<label className="flex-1">
							<span className="sr-only">Alamat email</span>
							<input
								type="email"
								required
								placeholder="nama@email.com"
								className="h-12 w-full rounded-full border border-space-600 bg-space-900 px-5 text-sm text-paper placeholder:text-space-400 transition-colors focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/40"
							/>
						</label>
						<Button variant="contained" size="md" type="submit">
							Berlangganan
						</Button>
					</form>
				</div>
			</div>
		</section>
	);
}
