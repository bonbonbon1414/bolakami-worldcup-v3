import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

const NEWS_DIR = path.join(process.cwd(), "src/content/news");

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

function readRaw() {
	const files = fs.readdirSync(NEWS_DIR).filter((f) => f.endsWith(".md"));
	return files.map((file) => {
		const raw = fs.readFileSync(path.join(NEWS_DIR, file), "utf8");
		const { data, content } = matter(raw);
		const slug = file.replace(/\.md$/, "");
		const meta: NewsMeta = {
			slug,
			title: data.title ?? slug,
			excerpt: data.excerpt ?? "",
			category: data.category ?? "Berita",
			author: data.author ?? "Tim Bolakami",
			time: data.time ?? "",
			order: typeof data.order === "number" ? data.order : 999,
			featured: data.featured === true,
		};
		return { meta, content };
	});
}

export function getAllNews(): NewsMeta[] {
	return readRaw()
		.map((n) => n.meta)
		.sort((a, b) => a.order - b.order);
}

export function getNewsSlugs(): string[] {
	return readRaw().map((n) => n.meta.slug);
}

export function getNewsBySlug(slug: string): NewsArticle | null {
	const found = readRaw().find((n) => n.meta.slug === slug);
	if (!found) return null;
	return {
		...found.meta,
		html: marked.parse(found.content, { async: false }),
	};
}
