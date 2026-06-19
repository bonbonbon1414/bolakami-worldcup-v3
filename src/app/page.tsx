import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Schedule from "@/components/Schedule";
import NewsSection from "@/components/News";
import Standings from "@/components/Standings";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<div className="min-h-screen bg-space-900">
			<Navbar />
			<main>
				<Hero />
				<Schedule />
				<NewsSection />
				<Standings />
				<Faq />
			</main>
			<Footer />
		</div>
	);
}
