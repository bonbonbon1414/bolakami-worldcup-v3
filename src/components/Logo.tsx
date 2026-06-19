export default function Logo() {
	return (
		<a href="#beranda" className="flex shrink-0 items-center gap-2.5">
			<span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-500 text-space-950 shadow-[0_0_20px_rgba(0,218,0,0.45)]">
				<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
					<circle cx="12" cy="12" r="9" />
					<path
						d="M12 7.5l3 2.2-1.1 3.5h-3.8L9 9.7 12 7.5z"
						fill="currentColor"
						stroke="none"
					/>
					<path d="M12 3v2M12 19v2M3 12h2M19 12h2" strokeLinecap="round" />
				</svg>
			</span>
			<span className="font-display text-xl font-extrabold tracking-tight text-paper">
				Bola<span className="text-brand-500">kami</span>
			</span>
		</a>
	);
}
