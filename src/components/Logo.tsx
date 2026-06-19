export default function Logo() {
	return (
		<a href="#beranda" className="flex shrink-0 items-center gap-2.5">
			{/* eslint-disable-next-line @next/next/no-img-element */}
			<img
				src="https://pub-152057235af540e0af1635a3863a9fba.r2.dev/Profile-Bolakami.jpg"
				alt="Bolakami"
				width={36}
				height={36}
				className="h-9 w-9 shrink-0 rounded-xl object-cover shadow-[0_0_20px_rgba(0,218,0,0.45)]"
			/>
			<span className="font-display text-xl font-extrabold tracking-tight text-paper">
				Bola<span className="text-brand-500">kami</span>
			</span>
		</a>
	);
}
