// Runtime-safe news access. Data is generated at build time by
// scripts/generate-news.mjs (no node:fs / marked at runtime — required for
// the Cloudflare Workers runtime, which has no filesystem).
import { newsData } from "./news.data";

export type NewsMeta = {
	slug: string;
	title: string;
	excerpt: string;
	category: string;
	author: string;
	time: string;
	order: number;
	featured: boolean;
};

export type NewsArticle = NewsMeta & { html: string };

const all = newsData as NewsArticle[];

export function getAllNews(): NewsMeta[] {
	return [...all].sort((a, b) => a.order - b.order);
}

export function getNewsSlugs(): string[] {
	return all.map((n) => n.slug);
}

export function getNewsBySlug(slug: string): NewsArticle | null {
	return all.find((n) => n.slug === slug) ?? null;
}
