import Link from "next/link";
import { getAllNews, type NewsMeta } from "@/lib/news";
import Button from "./ui/Button";
import SectionHeading from "./SectionHeading";

const categories = ["Semua", "Piala Dunia", "Timnas", "Transfer", "Preview", "Highlight"];

export default function NewsSection() {
	const news = getAllNews();
	const featured = news.find((n) => n.featured) ?? news[0];
	const rest = news.filter((n) => n.slug !== featured.slug);

	return (
		<section
			id="berita"
			className="border-y border-space-700 bg-space-950/40"
		>
			<div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
				<SectionHeading
					kicker="Update Harian"
					title="Berita Bola Terbaru"
					action={
						<Button variant="texted" size="sm" className="hidden sm:inline-flex">
							Semua berita →
						</Button>
					}
				/>

				{/* category chips */}
				<div className="no-scrollbar mb-8 flex gap-2 overflow-x-auto">
					{categories.map((c, i) => (
						<button
							key={c}
							aria-pressed={i === 0}
							className={`min-h-[44px] shrink-0 cursor-pointer rounded-full px-4 text-sm font-medium transition-colors ${
								i === 0
									? "bg-brand-500 text-space-950"
									: "border border-space-600 text-space-300 hover:border-brand-500/50 hover:text-paper"
							}`}
						>
							{c}
						</button>
					))}
				</div>

				<div className="grid gap-6 lg:grid-cols-2">
					<FeaturedCard news={featured} />
					<div className="flex flex-col gap-4">
						{rest.map((n) => (
							<CompactCard key={n.slug} news={n} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

function FeaturedCard({ news }: { news: NewsMeta }) {
	return (
		<Link
			href={`/berita/${news.slug}`}
			className="group flex flex-col overflow-hidden rounded-3xl border border-space-700 bg-space-800 transition-colors hover:border-brand-500/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/60"
		>
			<div className="relative grid h-56 place-items-center bg-gradient-to-br from-brand-700/30 via-space-800 to-space-900 text-7xl">
				<span aria-hidden>{news.emoji}</span>
				<span className="absolute left-4 top-4 rounded-full bg-brand-500 px-3 py-1 text-xs font-bold text-space-950">
					{news.category}
				</span>
			</div>
			<div className="flex flex-1 flex-col p-6">
				<h3 className="font-display text-xl font-extrabold leading-snug text-paper transition-colors group-hover:text-brand-500">
					{news.title}
				</h3>
				<p className="mt-3 flex-1 text-sm leading-relaxed text-space-300">
					{news.excerpt}
				</p>
				<Meta news={news} />
			</div>
		</Link>
	);
}

function CompactCard({ news }: { news: NewsMeta }) {
	return (
		<Link
			href={`/berita/${news.slug}`}
			className="group flex gap-4 rounded-2xl border border-space-700 bg-space-800 p-4 transition-colors hover:border-brand-500/50 hover:bg-space-700/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/60"
		>
			<div className="grid h-20 w-20 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-700/25 to-space-900 text-3xl">
				<span aria-hidden>{news.emoji}</span>
			</div>
			<div className="min-w-0 flex-1">
				<span className="text-[11px] font-bold uppercase tracking-wide text-brand-500">
					{news.category}
				</span>
				<h3 className="mt-1 line-clamp-2 text-sm font-bold leading-snug text-paper transition-colors group-hover:text-brand-500">
					{news.title}
				</h3>
				<Meta news={news} compact />
			</div>
		</Link>
	);
}

function Meta({ news, compact }: { news: NewsMeta; compact?: boolean }) {
	return (
		<div
			className={`flex items-center gap-2 text-xs text-space-300 ${compact ? "mt-2" : "mt-5"}`}
		>
			<span className="font-medium text-paper">{news.author}</span>
			<span>·</span>
			<span>{news.time}</span>
		</div>
	);
}
