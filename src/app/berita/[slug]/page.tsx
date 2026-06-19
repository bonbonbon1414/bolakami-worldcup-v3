import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getNewsBySlug, getNewsSlugs } from "@/lib/news";

export const dynamicParams = false;

export function generateStaticParams() {
	return getNewsSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>;
}): Promise<Metadata> {
	const { slug } = await params;
	const article = getNewsBySlug(slug);
	if (!article) return { title: "Berita tidak ditemukan — Bolakami" };
	return {
		title: `${article.title} — Bolakami`,
		description: article.excerpt,
		openGraph: {
			title: article.title,
			description: article.excerpt,
			type: "article",
		},
	};
}

export default async function ArticlePage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const article = getNewsBySlug(slug);
	if (!article) notFound();

	return (
		<div className="min-h-screen bg-space-900">
			<Navbar />
			<main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
				<Link
					href="/#berita"
					className="inline-flex items-center gap-2 rounded-full text-sm font-medium text-space-300 transition-colors hover:text-brand-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/60"
				>
					<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
						<path d="m15 18-6-6 6-6" />
					</svg>
					Kembali ke berita
				</Link>

				<article className="mt-6">
					<span className="inline-flex rounded-full bg-brand-500/15 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-500">
						{article.category}
					</span>

					<h1 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-paper sm:text-4xl">
						{article.title}
					</h1>

					<div className="mt-4 flex items-center gap-2 text-sm text-space-300">
						<span className="font-medium text-paper">{article.author}</span>
						<span>·</span>
						<span>{article.time}</span>
					</div>

					<div className="mt-6 grid h-56 place-items-center rounded-3xl border border-space-700 bg-gradient-to-br from-brand-700/30 via-space-800 to-space-900 text-7xl sm:h-72">
						<span aria-hidden>{article.emoji}</span>
					</div>

					<div
						className="article-body mt-8"
						dangerouslySetInnerHTML={{ __html: article.html }}
					/>
				</article>
			</main>
			<Footer />
		</div>
	);
}
