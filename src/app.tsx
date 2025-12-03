import { BottomNav } from "./components/layout/BottomNav";
import { Header } from "./components/layout/Header";
import { FindAProgramSection } from "./components/layout/sections/FindAProgramSection";
import { HeroSection } from "./components/layout/sections/HeroSection";
import { LandAcknowledgementSection } from "./components/layout/sections/LandAcknowledgement";
import { QuickLinks } from "./components/layout/sections/QuickLinksSection";
import { StoriesAndHighlightsSection } from "./components/layout/sections/StoriesAndHighlightsSection";

export function App() {
	return (
		<>
			{/* Website navigation */}
			<Header />
			<BottomNav />

			<main>
				{/* Page sections */}
				<HeroSection />
				<FindAProgramSection />
				<StoriesAndHighlightsSection />
				<QuickLinks />
				<LandAcknowledgementSection />
			</main>
		</>
	)
}
