import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const circular = localFont({
	variable: "--font-circular",
	display: "swap",
	src: [
		{
			path: "./fonts/CIrcular Std Font/Circular Std Book.woff2",
			weight: "400",
			style: "normal",
		},
		{
			path: "./fonts/CIrcular Std Font/Circular Std Book Italic.woff2",
			weight: "400",
			style: "italic",
		},
		{
			path: "./fonts/CIrcular Std Font/Circular Std Medium.woff2",
			weight: "500",
			style: "normal",
		},
		{
			path: "./fonts/CIrcular Std Font/Circular Std Medium Italic.woff2",
			weight: "500",
			style: "italic",
		},
		{
			path: "./fonts/CIrcular Std Font/Circular Std Bold.woff2",
			weight: "700",
			style: "normal",
		},
		{
			path: "./fonts/CIrcular Std Font/Circular Std Bold Italic.woff2",
			weight: "700",
			style: "italic",
		},
		{
			path: "./fonts/CIrcular Std Font/Circular Std Black.woff2",
			weight: "900",
			style: "normal",
		},
		{
			path: "./fonts/CIrcular Std Font/Circular Std Black Italic.woff2",
			weight: "900",
			style: "italic",
		},
	],
});

export const metadata: Metadata = {
	title: "Bolakami — Berita Bola Terbaru & Jadwal Piala Dunia Hari Ini",
	description:
		"Bolakami menyajikan berita bola terbaru, jadwal Piala Dunia hari ini, skor langsung, klasemen, dan highlight pertandingan dari seluruh dunia.",
	keywords: [
		"berita bola",
		"jadwal piala dunia",
		"skor langsung",
		"klasemen",
		"bolakami",
	],
	openGraph: {
		title: "Bolakami — Berita Bola Terbaru & Jadwal Piala Dunia",
		description:
			"Berita bola terbaru, jadwal Piala Dunia hari ini, skor langsung & klasemen.",
		type: "website",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="id">
			<body className={`${circular.variable} antialiased`}>{children}</body>
		</html>
	);
}
