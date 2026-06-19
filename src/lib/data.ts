export type MatchStatus = "live" | "upcoming" | "finished";

export type Match = {
	id: string;
	home: { name: string; flag: string; score?: number };
	away: { name: string; flag: string; score?: number };
	group: string;
	time: string; // "20:00" or minute "67'"
	venue: string;
	status: MatchStatus;
};

export type StandingRow = {
	pos: number;
	team: string;
	flag: string;
	p: number;
	w: number;
	d: number;
	l: number;
	gd: number;
	pts: number;
};

export const todayMatches: Match[] = [
	{
		id: "m1",
		home: { name: "Argentina", flag: "🇦🇷", score: 2 },
		away: { name: "Brasil", flag: "🇧🇷", score: 1 },
		group: "Grup C",
		time: "67'",
		venue: "Estadio Azteca",
		status: "live",
	},
	{
		id: "m2",
		home: { name: "Prancis", flag: "🇫🇷", score: 0 },
		away: { name: "Inggris", flag: "🏴", score: 0 },
		group: "Grup A",
		time: "23'",
		venue: "MetLife Stadium",
		status: "live",
	},
	{
		id: "m3",
		home: { name: "Spanyol", flag: "🇪🇸" },
		away: { name: "Jerman", flag: "🇩🇪" },
		group: "Grup B",
		time: "20:00",
		venue: "SoFi Stadium",
		status: "upcoming",
	},
	{
		id: "m4",
		home: { name: "Belanda", flag: "🇳🇱" },
		away: { name: "Portugal", flag: "🇵🇹" },
		group: "Grup D",
		time: "22:30",
		venue: "AT&T Stadium",
		status: "upcoming",
	},
	{
		id: "m5",
		home: { name: "Indonesia", flag: "🇮🇩" },
		away: { name: "Jepang", flag: "🇯🇵" },
		group: "Grup E",
		time: "02:00",
		venue: "Lumen Field",
		status: "upcoming",
	},
	{
		id: "m6",
		home: { name: "Maroko", flag: "🇲🇦", score: 3 },
		away: { name: "Kroasia", flag: "🇭🇷", score: 1 },
		group: "Grup F",
		time: "FT",
		venue: "Hard Rock Stadium",
		status: "finished",
	},
];

export const standings: StandingRow[] = [
	{ pos: 1, team: "Argentina", flag: "🇦🇷", p: 3, w: 3, d: 0, l: 0, gd: 6, pts: 9 },
	{ pos: 2, team: "Brasil", flag: "🇧🇷", p: 3, w: 2, d: 0, l: 1, gd: 3, pts: 6 },
	{ pos: 3, team: "Meksiko", flag: "🇲🇽", p: 3, w: 1, d: 0, l: 2, gd: -2, pts: 3 },
	{ pos: 4, team: "Nigeria", flag: "🇳🇬", p: 3, w: 0, d: 0, l: 3, gd: -7, pts: 0 },
];

export const topScorers = [
	{ name: "Kylian Mbappé", team: "Prancis", flag: "🇫🇷", goals: 5 },
	{ name: "Lionel Messi", team: "Argentina", flag: "🇦🇷", goals: 4 },
	{ name: "Harry Kane", team: "Inggris", flag: "🏴", goals: 4 },
	{ name: "Vinícius Jr", team: "Brasil", flag: "🇧🇷", goals: 3 },
];
