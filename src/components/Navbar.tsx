"use client";

import { useState } from "react";
import Button from "./ui/Button";
import Logo from "./Logo";

const nav = [
	{ label: "Beranda", href: "#beranda" },
	{ label: "Berita", href: "#berita" },
	{ label: "Jadwal", href: "#jadwal" },
	{ label: "Klasemen", href: "#klasemen" },
	{ label: "Highlight", href: "#highlight" },
];

export default function Navbar() {
	const [open, setOpen] = useState(false);

	return (
		<header className="sticky top-0 z-50 border-b border-space-700/80 bg-space-900/80 backdrop-blur-xl">
			<div className="mx-auto flex h-[72px] max-w-7xl items-center gap-6 px-4 sm:px-6 lg:px-8">
				<Logo />

				<nav className="hidden items-center gap-1 lg:flex">
					{nav.map((item) => (
						<a
							key={item.href}
							href={item.href}
							className="rounded-full px-4 py-2 text-sm font-medium text-space-300 transition-colors hover:bg-space-700/60 hover:text-paper"
						>
							{item.label}
						</a>
					))}
				</nav>

				<div className="ml-auto hidden items-center gap-3 md:flex">
					<SearchBar />
					<Button variant="outlined" size="sm">
						Masuk
					</Button>
					<Button variant="contained" size="sm">
						Daftar
					</Button>
				</div>

				<button
					onClick={() => setOpen((v) => !v)}
					className="ml-auto grid h-10 w-10 place-items-center rounded-full border border-space-600 text-paper md:hidden"
					aria-label="Buka menu"
				>
					<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
						{open ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
					</svg>
				</button>
			</div>

			{open && (
				<div className="border-t border-space-700 bg-space-900 px-4 py-4 md:hidden">
					<SearchBar />
					<nav className="mt-4 flex flex-col gap-1">
						{nav.map((item) => (
							<a
								key={item.href}
								href={item.href}
								onClick={() => setOpen(false)}
								className="rounded-xl px-4 py-3 text-sm font-medium text-space-300 hover:bg-space-700 hover:text-paper"
							>
								{item.label}
							</a>
						))}
					</nav>
					<div className="mt-4 flex gap-3">
						<Button variant="outlined" size="sm" className="flex-1">
							Masuk
						</Button>
						<Button variant="contained" size="sm" className="flex-1">
							Daftar
						</Button>
					</div>
				</div>
			)}
		</header>
	);
}

function SearchBar() {
	return (
		<label className="flex h-10 w-full items-center gap-2 rounded-full border border-space-600 bg-space-800 px-4 transition-colors focus-within:border-brand-500 md:w-56">
			<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-space-400">
				<circle cx="11" cy="11" r="8" />
				<path d="m21 21-4.3-4.3" strokeLinecap="round" />
			</svg>
			<input
				type="search"
				placeholder="Cari berita, tim, pemain…"
				className="w-full bg-transparent text-sm text-paper placeholder:text-space-400 focus:outline-none"
			/>
		</label>
	);
}
