import Navbar from "@/components/Navbar";
import MatchTicker from "@/components/MatchTicker";
import Hero from "@/components/Hero";
import Schedule from "@/components/Schedule";
import NewsSection from "@/components/News";
import Standings from "@/components/Standings";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<div className="min-h-screen bg-space-900">
			<Navbar />
			<MatchTicker />
			<main>
				<Hero />
				<Schedule />
				<NewsSection />
				<Standings />
				<Newsletter />
			</main>
			<Footer />
		</div>
	);
}
