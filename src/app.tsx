import { useEffect, useState } from "preact/hooks";

import { Header } from "./components/layout/Header";
import { AppNavMultiMenu } from "./components/navigation/AppNavMultiMenu";
import { BottomNav } from "./components/layout/BottomNav";

import { FindAProgramSection } from "./components/layout/sections/FindAProgramSection";
import { HeroSection } from "./components/layout/sections/HeroSection";
import { LandAcknowledgementSection } from "./components/layout/sections/LandAcknowledgementSection";
import { NewsAndEventsSection } from "./components/layout/sections/NewsAndEventsSection";
import { QuickLinks } from "./components/layout/sections/QuickLinksSection";
import { StoriesAndHighlightsSection } from "./components/layout/sections/StoriesAndHighlightsSection";

import { Footer } from "./components/layout/Footer";

export function App() {
	/** Number of pixels of scroll before header is marked as "sticking" */
	const header_sticking_offset = 26

	/** Whether the header is currently sticking to the top of the viewport while scrolling */
	const [is_header_sticking, set_is_header_sticking] = useState(false)

	/** Handle scroll event for page */
	const handle_page_scroll = () => {
		set_is_header_sticking(window.pageYOffset > header_sticking_offset)
	}

	// Attach scroll event listener to document
	useEffect(() => {
		document.addEventListener("scroll", handle_page_scroll)

		return () => {
			document.removeEventListener("scroll", handle_page_scroll)
		}
	})

	return (
		<>
			{/* Website navigation */}
			<AppNavMultiMenu.Provider>
				<Header sticking={is_header_sticking} />
				<BottomNav />
			</AppNavMultiMenu.Provider>

			<main>
				{/* Page sections */}
				<HeroSection />
				<FindAProgramSection />
				<StoriesAndHighlightsSection />
				<QuickLinks />
				<LandAcknowledgementSection />
				<NewsAndEventsSection />
			</main>

			<Footer />
		</>
	)
}
