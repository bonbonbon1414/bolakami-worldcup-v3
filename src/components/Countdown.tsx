"use client";

import { useEffect, useState } from "react";

const units = [
	{ key: "d", label: "Hari" },
	{ key: "h", label: "Jam" },
	{ key: "m", label: "Menit" },
	{ key: "s", label: "Detik" },
] as const;

function diff(target: number) {
	const total = Math.max(0, target - Date.now());
	return {
		d: Math.floor(total / 86_400_000),
		h: Math.floor((total / 3_600_000) % 24),
		m: Math.floor((total / 60_000) % 60),
		s: Math.floor((total / 1000) % 60),
	};
}

export default function Countdown() {
	// Kickoff: 6 days 4h from first render — stable target set on mount.
	const [target, setTarget] = useState<number | null>(null);
	const [t, setT] = useState({ d: 0, h: 0, m: 0, s: 0 });

	useEffect(() => {
		const tgt = Date.now() + (6 * 86_400_000 + 4 * 3_600_000 + 12 * 60_000);
		setTarget(tgt);
		setT(diff(tgt));
		const id = setInterval(() => setT(diff(tgt)), 1000);
		return () => clearInterval(id);
	}, []);

	return (
		<div className="flex gap-2.5" suppressHydrationWarning>
			{units.map((u) => (
				<div
					key={u.key}
					className="flex w-[68px] flex-col items-center rounded-2xl border border-space-600 bg-space-800/80 py-3"
				>
					<span className="font-display text-2xl font-extrabold tabular-nums text-paper">
						{target === null ? "––" : String(t[u.key]).padStart(2, "0")}
					</span>
					<span className="mt-0.5 text-[11px] font-medium uppercase tracking-wide text-space-400">
						{u.label}
					</span>
				</div>
			))}
		</div>
	);
}
