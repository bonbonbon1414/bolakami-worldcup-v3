export type MatchStatus = "live" | "upcoming" | "finished";

export type Match = {
	id: string;
	home: { name: string; code: string; score?: number };
	away: { name: string; code: string; score?: number };
	group: string;
	time: string; // "20:00" or minute "67'"
	venue: string;
	status: MatchStatus;
};

export type StandingRow = {
	pos: number;
	team: string;
	code: string;
	p: number;
	w: number;
	d: number;
	l: number;
	gd: number;
	pts: number;
};

// Jadwal Piala Dunia 2026 — Jumat, 19 Juni 2026 (waktu kickoff dalam WIB)
export const todayMatches: Match[] = [
	{
		id: "m1",
		home: { name: "Amerika Serikat", code: "us" },
		away: { name: "Australia", code: "au" },
		group: "Grup D",
		time: "02:00",
		venue: "Lumen Field, Seattle",
		status: "upcoming",
	},
	{
		id: "m2",
		home: { name: "Skotlandia", code: "gb-sct" },
		away: { name: "Maroko", code: "ma" },
		group: "Grup C",
		time: "05:00",
		venue: "Gillette Stadium, Foxborough",
		status: "upcoming",
	},
	{
		id: "m3",
		home: { name: "Brasil", code: "br" },
		away: { name: "Haiti", code: "ht" },
		group: "Grup C",
		time: "07:30",
		venue: "Lincoln Financial Field, Philadelphia",
		status: "upcoming",
	},
	{
		id: "m4",
		home: { name: "Turki", code: "tr" },
		away: { name: "Paraguay", code: "py" },
		group: "Grup D",
		time: "11:00",
		venue: "Levi's Stadium, Santa Clara",
		status: "upcoming",
	},
];

export const standings: StandingRow[] = [
	{ pos: 1, team: "Argentina", code: "ar", p: 3, w: 3, d: 0, l: 0, gd: 6, pts: 9 },
	{ pos: 2, team: "Brasil", code: "br", p: 3, w: 2, d: 0, l: 1, gd: 3, pts: 6 },
	{ pos: 3, team: "Meksiko", code: "mx", p: 3, w: 1, d: 0, l: 2, gd: -2, pts: 3 },
	{ pos: 4, team: "Nigeria", code: "ng", p: 3, w: 0, d: 0, l: 3, gd: -7, pts: 0 },
];

export const topScorers = [
	{ name: "Kylian Mbappé", team: "Prancis", code: "fr", goals: 5 },
	{ name: "Lionel Messi", team: "Argentina", code: "ar", goals: 4 },
	{ name: "Harry Kane", team: "Inggris", code: "gb-eng", goals: 4 },
	{ name: "Vinícius Jr", team: "Brasil", code: "br", goals: 3 },
];
